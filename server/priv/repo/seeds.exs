# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     AwesomeShop.Repo.insert!(%AwesomeShop.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

for manufacturer <- ["Fujifilm", "Nike", "Adidas", "Apple"] do
  {:ok, _} = AwesomeShop.Catalog.create_manufacturer(%{name: manufacturer})
end

for category <- ["Technology", "Clothes", "Shoes", "Photography", "Decoration"] do
  {:ok, _} = AwesomeShop.Catalog.create_category(%{name: category})
end

products = [
  %{
    name: "Fujifilm DSLR Camera",
    description: "High quality black Fujifilm DSLR Camera",
    manufacturer_id: 1,
    category_ids: [1, 4],
    price: 3000,
    stock: 50,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
  },
  %{
    name: "Nike Sneakers",
    description: "Cool white Nike sneakers",
    manufacturer_id: 2,
    categories: [3],
    price: 80,
    stock: 100,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
  },
  %{
    name: "Adidas Yeezy Boost",
    description: "White Adidas Yeezy sneakers",
    manufacturer_id: 3,
    categories: [3],
    price: 90,
    stock: 100,
    image: "https://images.pexels.com/photos/6050909/pexels-photo-6050909.jpeg"
  },
  %{
    name: "Apple Watch",
    description: "Last generation Apple Watch with white band",
    manufacturer_id: 4,
    categories: [2],
    price: 500,
    stock: 200,
    image: "https://images.pexels.com/photos/2779018/pexels-photo-2779018.jpeg"
  }
]

for product <- products do
  {:ok, _} = AwesomeShop.Catalog.create_product(product)
end
