from rest_framework.generics import DestroyAPIView
from ...models.product import Product
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST


class DeleteProduct(DestroyAPIView):

    def delete(self, *args, **kwargs):

        pro = Product.objects.filter(id=self.kwargs['pk'])
        if pro.exists():
            pro.delete()
            return Response({"success": "ok"})
        return Response({"error": "This Product doesn't Exist."}, status=HTTP_400_BAD_REQUEST)
