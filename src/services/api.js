let data = [
  {
    id: 1,
    name: "product name 1",
    description: "description of product",
    content: "some content of product 1"
  },
  {
    id: 2,
    name: "product name 2",
    description: "description of product",
    content: "some content of product 2"
  },
  {
    id: 3,
    name: "product name 3",
    description: "description of product",
    content: "some content of product 3"
  },
  {
    id: 4,
    name: "product name 4",
    description: "description of product",
    content: "some content of product 4"
  },
  {
    id: 5,
    name: "product name 5",
    description: "description of product",
    content: "some content of product 5"
  },
  {
    id: 6,
    name: "product name 6",
    description: "description of product",
    content: "some content of product 6"
  },
  {
    id: 7,
    name: "product name 7",
    description: "description of product",
    content: "some content of product 7"
  },
  {
    id: 8,
    name: "product name 8",
    description: "description of product",
    content: "some content of product 8"
  },
  {
    id: 9,
    name: "product name 9",
    description: "description of product",
    content: "some content of product 9"
  },
  {
    id: 10,
    name: "product name 10",
    description: "description of product",
    content: "some content of product 10"
  },
  {
    id: 11,
    name: "product name 11",
    description: "description of product",
    content: "some content of product 11"
  },
  {
    id: 12,
    name: "product name 12",
    description: "description of product",
    content: "some content of product 12"
  },
  {
    id: 13,
    name: "product name 13",
    description: "description of product",
    content: "some content of product 13"
  },
  {
    id: 14,
    name: "product name 14",
    description: "description of product",
    content: "some content of product 14"
  },
  {
    id: 15,
    name: "product name 15",
    description: "description of product",
    content: "some content of product 15"
  },
  {
    id: 16,
    name: "product name 16",
    description: "description of product",
    content: "some content of product 16"
  },
  {
    id: 17,
    name: "product name 17",
    description: "description of product",
    content: "some content of product 17"
  },
  {
    id: 18,
    name: "product name 18",
    description: "description of product",
    content: "some content of product 18"
  },
  {
    id: 19,
    name: "product name 19",
    description: "description of product",
    content: "some content of product 19"
  }
];

export function getListData() {
  return data;
}

export function getProductDetails(id) {
  return new Promise((resolve) => {
    for (var i = 0; i< data.length; i++) {
      if (data[i].id == id) resolve(data[i])
    }
  })
  
}
