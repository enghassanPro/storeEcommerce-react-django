from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from ...models.brand import Brand
from ...models.product import type_currency_choices, type_condition_choices, User, Product
from ...models.product_color import color_choices, Product_Color
from ...models.product_size import type_size_choices, Product_Size
from ...models.product_image import Product_Image
from ...models.product_specification import Product_Specification
from ...models.product_platform import Product_Platform
from ...models.product_recommended_use import Product_Recommended_Use
from ...models.product_terms_condition import Product_Terms_Condition
from ...serilaizers.products.updateSerializer import UpdateSerializer
from ...serilaizers.products.specificationSerializer import SpecificationSerializer
from ...serilaizers.products.imageSerializer import ImageSerializer
from ...serilaizers.products.colorSerializer import ColorSerializer
from ...serilaizers.products.platformSerializer import PlatformSerializer
from ...serilaizers.products.recommendedUseSerializer import RecommendedUseSerializer
from ...serilaizers.products.sizeSerializer import SizeSerializer
from ...serilaizers.products.termConditionSerializer import TermConditionSerializer


class UpdateProduct(GenericAPIView):
    serializer_class = UpdateSerializer
    _product_obj = None
    _brands = Brand.objects.values("id", "name")
    def get(self, request, *args, **kwargs):

        data = self.get_queryset()
        extract_sp = self.extract_filter_data(Product_Specification.objects.values(
            "name", "value").filter(product=data.id))
        extract_img = self.extract_filter_data(
            Product_Image.objects.values('image').filter(product=data.id))
        if data:
            return Response(self.get_data({
                "product": data,
                "specific": extract_sp,
                "img": extract_img
            }))
        else:
            return Response({"errors": False}, status=HTTP_404_NOT_FOUND)

    def extract_filter_data(self, data):
        arr = []
        for i in data:
            arr.append(i)
        return arr

    def get_extra_data(self, id):

        extra_data = {}
        pl = Product_Platform.objects.values(
            'platform').filter(product=id)
        col = Product_Color.objects.values('color').filter(product=id)
        siz = Product_Size.objects.values(
            'size', 'type_size').filter(product=id)
        recom = Product_Recommended_Use.objects.values(
            'recommended_use').filter(product=id)
        terms = Product_Terms_Condition.objects.values(
            'terms_condition').filter(product=id)

        if pl.exists():
            extra_data['platform'] = self.extract_filter_data(pl)
        if col.exists():
            extra_data['color'] = self.extract_filter_data(col)
        if siz.exists():
            extra_data['size'] = self.extract_filter_data(siz)
        if recom.exists():
            extra_data['recom_use'] = self.extract_filter_data(recom)
        if terms.exists():
            extra_data['term_condition'] = self.extract_filter_data(terms)

        if extra_data:
            return extra_data
        else:
            return False

    def get_queryset(self):
        try:
            return Product.objects.get(id=self.kwargs['pk'])
        except:
            return False

    def put(self, request, *args, **kwargs):

        self._product_obj = self.get_queryset()
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
                    main = self.update_main_data(data, main)
                    self.update_extra_data(data, extra)
                    return Response(self.get_data(main))

            self.update_extra_data(data, False)
            main = self.update_main_data(data, main)
            return Response(self.get_data(main))

    def get_data(self, main):

        return {
            "user": User.objects.values('id', 'username').get(username="root"),
            "name": main['product'].title,
            "brand": main['product'].brand.id,
            "quantity": main['product'].quantity,
            "price": main['product'].price,
            "currency": main['product'].currency,
            "condition": main['product'].condition,
            "description": main['product'].description,
            "brands": self._brands,
            "conditions": type_condition_choices,
            "currencys": type_currency_choices,
            "colors": color_choices,
            "sizes": type_size_choices,
            "specific": self.extract_filter_data(main['specific']),
            "images": self.extract_filter_data(main['img']),
            "extra_data": self.get_extra_data(main['product'].id)
        }

    def prepare_data(self, data, img_data=None):
        # prepared the data extract all data from request and loads using json
        # extract images from request files and
        # return data as a dict

        from json import loads

        data = data['data']
        data = loads(data)
        data['img_current'] = {
            i.split("_")[2]: data['img_current'][i] for i in data['img_current']}
        if len(img_data) > 0:
            img = {i.split("_")[1]: img_data[i] for i in img_data}
            data['images'] = img

        return data

    def update_main_data(self, data, ser_data):

        pro = ser_data['product'].update(self._product_obj, data)

        for i in data['specific']:
            if 'current' in i:
                if i['current'] != i['name']:
                    ser_data['specific'].update(Product_Specification.objects.get(
                        product=self._product_obj.id, name=i['current']), i)
            else:
                i['product'] = self._product_obj
                ser_data['specific'].create(i)

        if 'images' in data:
            img = data['images']
            for i in img['images']:
                ser_data['image'].update(
                    Product_Image.objects.get(
                        product=self._product_obj.id,
                        image=img['current'][i]), img['images'][i])
        return {
            "product": pro,
            "specific": Product_Specification.objects.values('name', 'value').filter(product=pro.id),
            "img": Product_Image.objects.values('image').filter(product=pro.id)
        }

    def update_extra_data(self, data, ser_data):
        extra_d = {}

        if ser_data and ('color' in ser_data):

            if 'current' in data['color']:
                if data['color']['current'] != data['color']['color']:
                    Product_Color.objects.filter(
                        product=self._product_obj.id).delete()
                    for i in data['color']['color']:
                        ser_data['color'].create(
                            {"product": self._product_obj, 'color': i})

            else:
                for i in data['color']['color']:
                    ser_data['color'].create(
                        {"product": self._product_obj, 'color': i})
        else:
            col = Product_Color.objects.filter(
                product=self._product_obj.id)
            if col.exists():
                col.delete()

        if ser_data and ('size' in ser_data):
            siz = data['size']['size'][0]
            typ = data['size']['size'][1]
            if 'current' in data['size']:
                cur_siz = data['size']['current'][0]
                cur_typ = data['size']['current'][1]
                if siz != cur_siz:
                    ser_data['size'].update(Product_Size.objects.get(
                        product=self._product_obj.id), {"size": siz, "type_size": typ})
                elif typ != cur_typ:
                    ser_data['size'].update(Product_Size.objects.get(
                        product=self._product_obj.id), {"size": siz, "type_size": typ})
            else:
                ser_data['size'].create(
                    {"product": self._product_obj, "size": siz, "type_size": typ})
        else:
            siz = Product_Size.objects.filter(
                product=self._product_obj.id)
            if siz.exists():
                siz.delete()

        if ser_data and ('platform' in ser_data):
            if 'platform_current' in data:
                if data['platform_current'] != data['platform']:
                    extra_d['platform'] = ser_data['platform'].update(Product_Platform.objects.get(
                        product=self._product_obj.id), data['platform'])
            else:
                extra_d['platform'] = ser_data['platform'].create(
                    {"product": self._product_obj, "platform": data['platform']})
        else:
            pl = Product_Platform.objects.filter(
                product=self._product_obj.id)
            if pl.exists():
                pl.delete()

        if ser_data and ('recom_use' in ser_data):

            if 'recom_use_current' in data:
                if data['recom_use_current'] != data['recom_use']:
                    extra_d['recom_use'] = ser_data['recom_use'].update(Product_Recommended_Use.objects.get(
                        product=self._product_obj.id), data['recom_use'])
            else:

                extra_d['recom_use'] = ser_data['recom_use'].create(
                    {"product": self._product_obj, "recommended_use": data['recom_use']})
        else:
            recom = Product_Recommended_Use.objects.filter(
                product=self._product_obj.id)
            if recom.exists():
                recom.delete()

        if ser_data and ('term_condition' in ser_data):
            if 'term_condition_current' in data:
                if data['term_condition_current'] != data['term_condition']:
                    extra_d['term_condition'] = ser_data['term_condition'].update(
                        Product_Terms_Condition.objects.get(product=self._product_obj.id), data['term_condition'])
            else:
                extra_d['term_condition'] = ser_data['term_condition'].create(
                    {"product": self._product_obj, "terms_condition": data['term_condition']})
        else:
            terms = Product_Terms_Condition.objects.filter(
                product=self._product_obj.id)
            if terms.exists():
                terms.delete()

        extra_d['color'] = Product_Color.objects.filter(
            product=self._product_obj.id)
        extra_d['size'] = Product_Size.objects.filter(
            product=self._product_obj.id)

        return extra_d

    def validate_main_data(self, data):

        pro_ser = UpdateSerializer(instance=self._product_obj, data=data)
        ser_data = {}
        if pro_ser.is_valid():
            ser_data['product'] = pro_ser
            sp = self.validate_specification(
                self._product_obj, data['specific'])
            if isinstance(sp, SpecificationSerializer):
                ser_data['specific'] = sp
                if 'images' in data:
                    data['images'] = {"images": data['images'],
                                      'current': data['img_current']}
                    img = self.validate_image(
                        self._product_obj, data['images'])
                    if isinstance(img, ImageSerializer):
                        ser_data['image'] = img
                        return ser_data
                    else:
                        return{"errors": img}
                else:
                    return ser_data
            else:
                return {"errors": sp}  # return error
        else:
            return {"errors": pro_ser.errors}

    def validate_extra_data(self, data):

        ser_data = {}
        if 'color' in data:
            col = self.validate_color(data['color']['color'])
            if isinstance(col, ColorSerializer):
                ser_data['color'] = col
            else:
                return {"errors": col}
        if 'size' in data:
            siz = self.validate_size(data['size']['size'])
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

    def validate_specification(self, pro, data):

        for i in data:
            sp = SpecificationSerializer(
                data={"name": i['name'], "value": i['value']})
            if not sp.is_valid():
                return sp.errors
        return sp

    def validate_image(self, pro, data):

        for i in data['images']:
            img = ImageSerializer(data={"image": data['images'][i]})
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
