# Generated by Django 3.0.4 on 2020-03-15 22:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import electro.models.product_image


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True)),
                ('publish', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, unique=True)),
                ('price', models.FloatField()),
                ('currency', models.CharField(choices=[('us', 'USD'), ('euro', 'EUR'), ('yen', 'JPY'), ('br', 'GBP'), ('swfr', 'CHF'), ('cad', 'CAD'), ('eg', 'EGP'), ('safr', 'ZAR'), ('emr', 'AED')], max_length=100)),
                ('quantity', models.IntegerField(default=0)),
                ('condition', models.CharField(choices=[('nw', 'New'), ('od', 'Old'), ('us', 'Used')], max_length=50)),
                ('description', models.TextField()),
                ('updated', models.DateTimeField(auto_now=True)),
                ('publish', models.DateTimeField(auto_now_add=True)),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Brand')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Product_Terms_Condition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('terms_condition', models.TextField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Specification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('value', models.CharField(max_length=300)),
                ('publish', models.DateTimeField(auto_now_add=True)),
                ('update', models.DateTimeField(auto_now=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Size',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.FloatField()),
                ('type_size', models.CharField(choices=[('kg', 'kg'), ('m', 'm'), ('ml', 'ml'), ('mm', 'mm'), ('ft', 'ft'), ('inch', 'inch'), ('lt', 'liter')], max_length=30)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Recommended_Use',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recommended_use', models.CharField(max_length=150)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Platform',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('platform', models.CharField(max_length=100)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=electro.models.product_image.get_image_filename)),
                ('publish', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Color',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(choices=[('rd', 'Red'), ('org', 'Orange'), ('yw', 'Yellow'), ('grn', 'Green'), ('be', 'Blue'), ('br', 'Brown'), ('mga', 'Magenta'), ('tn', 'Tan'), ('cyn', 'Cyan'), ('ov', 'Olive'), ('mron', 'Maroon'), ('nvy', 'Navy'), ('aqne', 'Aquamarine'), ('tqse', 'Turquoise'), ('svr', 'Silver'), ('lm', 'Lime'), ('tl', 'Teal'), ('igo', 'Indigo'), ('vlt', 'Violet'), ('pk', 'Pink'), ('blk', 'Black'), ('wit', 'White'), ('gry', 'Grey')], max_length=50)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='electro.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, unique=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('publish', models.DateTimeField(auto_now_add=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='electro.Categorie')),
            ],
        ),
        migrations.AddField(
            model_name='brand',
            name='category',
            field=models.ManyToManyField(related_name='section', to='electro.Categorie'),
        ),
    ]