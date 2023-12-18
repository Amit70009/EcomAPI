var CommonFunc = require("../../Common Function/commonfunction.js");
var CartSchema = require("./cartModel.js").CartModel;

async function AddCart(data) {
  try {
    var addToCart = {
      cart_user_id: data.cart_user_id,
      cart_product_name: data.cart_product_name,
      cart_product_image: data.cart_product_image,
      cart_product_quantity: data.cart_product_quantity,
      cart_product_price: data.cart_product_price,
      cart_product_description: data.cart_product_description,
      cart_product_sale_price: data.cart_product_sale_price,
      cart_product_color: data.cart_product_color,
      cart_product_size: data.cart_product_size,
      cart_product_code: data.cart_product_code,
      cart_total_price: data.cart_total_price,
    };

    await CartSchema.create(addToCart);

    return {
      status: 200,
      message: "Item added to cart successfully",
      data: { addToCart },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function UpdateCart(cartID, data) {
  try {
    var matchCart = await CartSchema.findOneAndUpdate(
      {
        _id: cartID,
      },
      {
        $set: {
          cart_product_quantity: data.cart_product_quantity,
          cart_total_price: data.cart_total_price,
        },
      }
    );
    if (matchCart) {
      return {
        status: "200",
        Message: "Cart Updated successfully",
        data: { matchCart },
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function DeleteAllCart(userID, data ) {
  try {
    var deleteCart = await CartSchema.deleteMany({
      cart_user_id: userID,
    });
    return {
      status: 200,
      message: "All Product has been Deleted Successfully From Cart",
      data: { deleteCart },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function DeleteCart(cartID, data) {
  try {
    var checkCart = await CartSchema.find({
      _id: cartID,
    });
    if (!checkCart.length) {
      return {
        status: 200,
        message: "No product found with this Cart ID",
        data: {},
      };
    } else {
      var deleteCart = await CartSchema.deleteOne({
       _id: cartID,
      });
      return {
        status: 200,
        message: "Product has been Deleted From Cart Successfully",
        data: { checkCart },
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function fetchAllCart(userID, data, queryParams){
  try {
      const filter = { ...queryParams };
      var matchCart = await CartSchema.find({
        cart_user_id: userID,
        });
      if(matchCart){
          return{
              status: 200,
              message: "All Cart Fetched Successfully",
              data: {matchCart}
          }
      }
  } catch (error) {
      console.log(error);
      throw error;
  }
}

async function fetchCart(userID, data, queryParams){
  try {
      const filter = { ...queryParams };
      var matchCart = await CartSchema.findOne({
        _id: userID,
      })
      if(matchCart){
          return{
              status: 200,
              message: "Cart Fetched Successfully",
              data: {matchCart}
          }
      }
  } catch (error) {
      // console.log(error);
      throw error;
  }
}

async function fetchCartByProductCode(userID, data, queryParams){
  try {
      const filter = { ...queryParams };
      var matchCart = await CartSchema.findOne({
        cart_product_code: userID,
      })
      if(matchCart){
          return{
              status: 200,
              message: "Cart Fetched Successfully",
              data: {matchCart}
          }
      }
  } catch (error) {
      // console.log(error);
      throw error;
  }
}


module.exports = {
  AddCart,
  DeleteAllCart,
  UpdateCart,
  DeleteCart,
  fetchAllCart,
  fetchCart,
  fetchCartByProductCode
};
