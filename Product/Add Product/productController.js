var ProductSchema = require("./productmodel").productModel;
var CommonFunc = require("../../Common Function/commonfunction");

async function AddProduct(data, productImage) {
  try {
    
    var checkProduct = await ProductSchema.find(
      {
        $or: [
          { product_code: data.product_code },
          { product_name: data.product_name },
        ],
      },
      { createdOn: 0, __v: 0 }
    );
    if (checkProduct.length) {
      return {
        status: 202,
        message: "Product Code or Product Name already exists",
        data: { checkProduct },
      };
    }
  
    var AddProduct = {
      product_code: data.product_code,
      product_name: data.product_name,
      product_category: data.product_category,
      product_price: data.product_price,
      product_sale_price: data.product_sale_price,
      product_dimension: data.product_dimension,
      product_size: data.product_size,
      product_color: data.product_color,
      product_inventory: data.product_inventory,
      product_short_description: data.product_short_description,
      product_long_description: data.product_long_description,
      isProductAvailable: data.isProductAvailable,
      productImage: productImage,
      isProductTaxable: data.isProductTaxable,
    };

    await ProductSchema.create(AddProduct);

    return {
      status: 200,
      message: "Product Added Successfully",
      data: { AddProduct },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function DeleteProduct(data) {
  try {
    var checkProduct = await ProductSchema.find({
      product_code: data.product_code,
    });
    if (!checkProduct.length) {
      return {
        status: 200,
        message: "No Product found with this Product code or Product Name",
        data: {},
      };
    } else {
      var deleteProduct = await ProductSchema.deleteOne({
        product_code: data.product_code,
      });
      return {
        status: 200,
        message: "Product has been Deleted Successfully",
        data: { checkProduct },
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function EditProduct(productID, data) {
  try {
    var UpdateProduct = await ProductSchema.findOneAndUpdate(
      {
        product_code: productID,
      },
      {
        $set: {
          product_name: data.product_name,
          product_quantity: data.product_quantity,
          product_category: data.product_category,
          product_price: data.product_price,
          product_sale_price: data.product_sale_price,
          product_size: data.product_size,
          product_color: data.product_color,
          product_dimension: data.product_dimension,
          product_inventory: data.product_inventory,
          product_short_description: data.product_short_description,
          product_long_description: data.product_long_description,
          isProductAvailable: data.isProductAvailable,
          product_image: data.product_image,
          isProductTaxable: data.isProductTaxable,
        },
      }
    );
    // console.log(UpdateProduct);
    if (UpdateProduct) {
      return {
        status: 200,
        message: "Product has been Updated Successfully",
        data: { UpdateProduct },
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function fetchProduct(data) {
  try {
    var matchProduct = await ProductSchema.findOne({
      product_code: data,
    });
    if (matchProduct) {
      return {
        status: 200,
        message: "Product Fetched Successfully",
        data: { matchProduct },
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function fetchAllProduct() {
  try {
    var matchProduct = await ProductSchema.find();
    if (matchProduct) {
      return {
        status: 200,
        message: "All Products Fetched Successfully",
        data: { matchProduct },
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  AddProduct,
  DeleteProduct,
  EditProduct,
  fetchProduct,
  fetchAllProduct,
};
