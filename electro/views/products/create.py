from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from ...models.brand import Brand
from ...models.product import type_currency_choices, type_condition_choices, User
from ...models.product_color import color_choices
from ...models.product_size import type_size_choices
from ...serilaizers.products.createSerializer import CreateSerializer
from ...serilaizers.products.specificationSerializer import SpecificationSerializer
from ...serilaizers.products.imageSerializer import ImageSerializer
from ...serilaizers.products.recommendedUseSerializer import RecommendedUseSerializer
from ...serilaizers.products.platformSerializer import PlatformSerializer
from ...serilaizers.products.colorSerializer import ColorSerializer
from ...serilaizers.products.sizeSerializer import SizeSerializer
from ...serilaizers.products.termConditionSerializer import TermConditionSerializer


from ...models.product_image import Product_Image


class CreateProduct(GenericAPIView):
    serializer_class = CreateSerializer

    def get(self, request):
        brand = Brand.objects.values('id', 'name')
        return Response({
            "user": User.objects.values('id', 'username').get(username="root"),
            "brand": brand,
            "condition": type_condition_choices,
            "currency": type_currency_choices,
            "color": color_choices,
            "size": type_size_choices,
            "image": Product_Image.objects.values('image').all(),
        })

    def post(self, request):

        data = self.prepare_data(self.request.data, self.request.FILES)
        main = self.validate_main_data(data)
        if 'errors' in main:
            return Response(main['errors'], status=HTTP_400_BAD_REQUEST)
        else:
            extra = self.validate_extra_data(data)
            if extra:
                if 'errors' in extra:
                    return Response(extra['errors'], status=HTTP_400_BAD_REQUEST)
                else:
                    pro = self.save_main_data(data, main)
                    self.save_extra_data(data, extra, pro)

                    return Response({"success": "Ok"})

            pro = self.save_main_data(data, main)
            return Response({"success": "Ok"})

    def prepare_data(self, data, img_data):
        # prepared the data extract all data from request and loads using json
        # extract images from request files and
        # return data as a dict

        from json import loads

        data = data.pop('data')
        data = loads(data[0])
        img = [img_data[i] for i in img_data]
        data['images'] = img

        return data

    def save_main_data(self, data, ser_data):

        pro = ser_data['product'].create(data)
        for i in data['specific']:
            ser_data['specific'].create(
                {"product": pro, "name": i['name'], "value": i['value']})
        for i in data['images']:
            ser_data['image'].create({"product": pro, "image": i})

        return pro

    def save_extra_data(self, data, ser_data, pro):

        if 'color' in ser_data:

            for i in data['color']:
                ser_data['color'].create({"product": pro, "color": i})

        if 'size' in ser_data:
            siz = data['size']
            ser_data['size'].create(
                {"product": pro, "size": siz[0], "type_size": siz[1]})

        if 'platform' in ser_data:
            ser_data['platform'].create(
                {"product": pro, "platform": data['platform']})

        if 'recom_use' in ser_data:
            ser_data['recom_use'].create(
                {"product": pro, "recommended_use": data['recom_use']})

        if 'term_condition' in ser_data:
            ser_data['term_condition'].create(
                {"product": pro, "terms_condition": data['term_condition']})

    def validate_main_data(self, data):
        pro_ser = self.get_serializer(data=data)
        ser_data = {}
        if pro_ser.is_valid():
            ser_data['product'] = pro_ser
            sp = self.validate_specification(data['specific'])
            if isinstance(sp, SpecificationSerializer):
                ser_data['specific'] = sp
                img = self.validatise_image(data['images'])
                if isinstance(img, ImageSerializer):
                    ser_data['image'] = img
                    return ser_data
                else:
                    return{"errors": img}
            else:
                return {"errors": sp}  # return error
        else:
            return {"errors": pro_ser.errors}

    def validate_extra_data(self, data):

        ser_data = {}
        if 'color' in data:
            col = self.validate_color(data['color'])
            if isinstance(col, ColorSerializer):
                ser_data['color'] = col
            else:
                return {"errors": col}
        if 'size' in data:
            siz = self.validate_size(data['size'])
            if isinstance(siz, SizeSerializer):
                ser_data['size'] = siz
            else:
                return {"errors": siz}

        if 'platform' in data:
            pl = PlatformSerializer(data={"platform": data['platform']})
            if pl.is_valid():
                ser_data['platform'] = pl
            else:
                return {"errors": pl.errors}

        if 'recom_use' in data:
            recom = RecommendedUseSerializer(
                data={"recommended_use": data['recom_use']})
            if recom.is_valid():
                ser_data['recom_use'] = recom
            else:
                return {"errors": recom.errors}

        if 'term_condition' in data:
            term = TermConditionSerializer(
                data={"terms_condition": data['term_condition']})
            if term.is_valid():
                ser_data['term_condition'] = term
            else:
                return {"errors": term.errors}

        if ser_data:
            return ser_data
        else:
            return False

    def validate_specification(self, data):

        for i in data:
            sp = SpecificationSerializer(
                data={"name": i['name'], "value": i['value']})
            if not sp.is_valid():
                return sp.errors
        return sp

    def validatise_image(self, data):

        for i in data:
            img = ImageSerializer(data={"image": i})
            if not img.is_valid():
                return img.errors
        return img

    def validate_color(self, data):

        for i in data:
            col = ColorSerializer(data={"color": i})
            if not col.is_valid():
                return col.errors

        return col

    def validate_size(self, data):

        size = SizeSerializer(data={"size": data[0],
                                    "type_size": data[1]})
        if not size.is_valid():
            return size.errors

        return size
