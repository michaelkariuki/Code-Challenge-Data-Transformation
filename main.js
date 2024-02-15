const frontEndData = {
  "name": "masinp pkk",
  "name_unique": "main_supplier",
  "description": "shampoo for hair wash",
  "unknownData":"manche",
  "noexitsting":"databurst",
  "supplier_address":
  {
    "create": {
      "address_type": "billing",
      "address": { "test": "test" },
      "partner_id": "c57fd6cf-e194-4666-9679-c96a71a118e8"
    }
  },

  "partner_id": "c57fd6cf-e194-4666-9679-c96a71a118e8"
}

const flattenedDbColumns = {
  name: 'masinp pkk',
  name_unique: 'main_supplier',
  description: 'shampoo for hair wash',
  partner_id: 'c57fd6cf-e194-4666-9679-c96a71a118e8',
  address_type: 'billing',
  address: { test: 'test' }
}


const keysToKeep = ['create', 'createMany', 'data', 'supplier', 'supplier_address']






