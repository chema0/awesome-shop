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

for manufacturer <- ["Fujifilm", "Nike", "Adidas", "Apple", "Awesome", "Channel"] do
  {:ok, _} = AwesomeShop.Catalog.create_manufacturer(%{name: manufacturer})
end

for category <- [
      "Technology",
      "Clothes",
      "Shoes",
      "Photography",
      "Decoration",
      "Accesories",
      "Miscellaneous"
    ] do
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
  },
  %{
    name: "Airpods",
    description: "Last generation Apple Airpods",
    manufacturer_id: 4,
    categories: [2],
    price: 180,
    stock: 300,
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg"
  },
  %{
    name: "Awesome Sunglasses",
    description: "Black framed hippie sunglasses",
    manufacturer_id: 5,
    categories: [6],
    price: 100,
    stock: 10,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg"
  },
  %{
    name: "Awesome T-Shirt",
    description: "Awesome white t-shirt",
    manufacturer_id: 5,
    categories: [2],
    price: 30,
    stock: 1000,
    image: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg"
  },
  %{
    name: "Awesome Can",
    description: "Awesome white can",
    manufacturer_id: 5,
    categories: [7],
    price: 10,
    stock: 10000,
    image: "https://images.pexels.com/photos/9462354/pexels-photo-9462354.jpeg"
  },
  %{
    name: "Awesome Phone",
    description: "Awesome simple white phone",
    manufacturer_id: 5,
    categories: [2],
    price: 200,
    stock: 300,
    image: "https://images.pexels.com/photos/11183905/pexels-photo-11183905.jpeg"
  },
  %{
    name: "Nº5 Channel Paris",
    description: "Channel Paris eau da perfum bottle",
    manufacturer_id: 6,
    categories: [6, 7],
    price: 100,
    stock: 200,
    image: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg"
  }
]

for product <- products do
  {:ok, _} = AwesomeShop.Catalog.create_product(product)
end
