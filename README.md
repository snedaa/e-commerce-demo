
# E-COMMERCE DEMO

Bu proje bir e-ticaret sitesi demosudur. İçerikler fake API ile oluşturulmuştur. Proje içerisinde bir çok konsept kullanılmıştır.




## Yükleme ve Kullanım

Projeyi klonlayın

```bash
  git clone https://github.com/snedaa/e-commerce-demo.git
```

Proje dizinine gidin

```bash
  cd e-commerce-demo
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run start
```

  
## API Kullanımı

#### Tüm öğeleri getir


#### Tüm ürünleri getir

```http
  GET /products
```
|Açıklama                       |
| :-------------------------------- |
| Tüm ürünleri getirir. |



#### Tek ürün getir
```http
  GET /products/${id}
```
| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Gerekli**. Çağrılacak öğenin anahtar değeri |


#### Ürün arama
```http
  GET /products/search?q=productName
```
| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` | **Gerekli**. Aranacak ürünün değeri. |


#### Ürün sayfalama
```http
  GET /products/products?limit=10&skip=10&select=title,price
```
| Açıklama                       |
| :-------------------------------- |
| **Limit**. Gelebilecek maksimum veris sayısı.|
| **Skip**. Es geçilecek veri sayısı.|
| **Select**. Hangi özelliklerin getirileceği.|

```http
  GET /api/items/${id}
```

| Limit | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### add(num1, num2)

İki sayı alır ve toplamı döndürür.






  
## API Hakkında Daha Fazla Bilgi

[dummyjson](https://dummyjson.com/)

  
## Kullanılan Teknolojiler ve Paketler

**Teknolojiler:** React.js, Tailwind

**Paketler:** axios, react-icons, react-slick, slick-carousel

  
## Çıkarılan Dersler

Bu proje kapsamında bir çok yeni react kütüphanesi hakkında bilgi sahibi oldum ve dökümantasyon takip etmenin önemini kavradım.

Özel hook fonksiyonlar yazmanın verdiği kolaylığı ve işlevselliğin daha çok farkına vardım.

Bir çok projede kullanabileceğim yapıları bir yerde toplamanın önemini anladım.

  
## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](/public/images/img3.jpg)
![Uygulama Ekran Görüntüsü](/public/images/img2.jpg)
![Uygulama Ekran Görüntüsü](/public/images/img1.jpg)

  