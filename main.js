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


//Sanitize function with 4 parameters, 3 that are necessary and 1 (result)
// set to an empty object
function sanitizeFunction(frontEndData, flattenedDbColumns, keysToKeep, result={}){
  // Loop throught frontEndData
  for(const [key, val] of Object.entries(frontEndData)){
    // if a key in frontEndData is in flattenedDbColumns,
    // Add it to the result object
    if(flattenedDbColumns[key]){
      result[key] = val
    }else if(typeof frontEndData[key] === "object"){
      // If the value of the key is an Object,
      // apply recurrsion on the value of the object in frontEndData
      sanitizeFunction(frontEndData[key], flattenedDbColumns, keysToKeep, result);
    }
    //Finally if a key in frontEndData is in keysToKeep,
    // add the key and value to the result object
    if(keysToKeep.includes(key)){
      result[key] = val
    }
  }
  // return the result object
  return result
}

console.log(sanitizeFunction(frontEndData, flattenedDbColumns, keysToKeep))

// RESULT
// {
//   name: 'masinp pkk',
//   name_unique: 'main_supplier',
//   description: 'shampoo for hair wash',
//   address_type: 'billing',
//   address: { test: 'test' },
//   partner_id: 'c57fd6cf-e194-4666-9679-c96a71a118e8',
//   create: {
//     address_type: 'billing',
//     address: { test: 'test' },
//     partner_id: 'c57fd6cf-e194-4666-9679-c96a71a118e8'
//   },
//   supplier_address: {
//     create: {
//       address_type: 'billing',
//       address: [Object],
//       partner_id: 'c57fd6cf-e194-4666-9679-c96a71a118e8'
//     }
//   }
// }




