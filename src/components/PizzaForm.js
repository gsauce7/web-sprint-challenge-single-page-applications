// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import img from "../images/nordwood-themes-ivP3TYdLvw0-unsplash.jpg";
// import "../App.css";
// import * as yup from "yup";
// import Orders from "./Orders";
// import axios from "axios";

// const schema = yup.object().shape({
//     name: yup.string().required('Please enter a valid name').min(2, 'That\'s not a valid input'),
//     phone: yup.string().required('Please enter a valid phone number').matches(/^[0-9]{10}$/, "Please enter a valid phone number")
// })

// const CoffeeDiv = styled.div`
//   width: 400px;
//   background: green;
//   color: white;
//   padding: 2%;
//   position: fixed;
//   margin: 2% 15% 15% 30%;
//   border-radius: 10px;
//   overflow: hidden;
// `;

// const CoffeeForm = props => {
//     console.log("props", props)
//   const [formState, setFormState] = useState({
//     name: "",
//     phone: "",
//     type: {
//       regular: false,
//       latte: false,
//       americano: false,
//       flatWhite: false,
//       espresso: false,
//       cappucino: false,
//     },
//     temp: {
//       iced: false,
//       hot: false,
//     },
//     milk: {
//       none: false,
//       soy: false,
//       almond: false,
//       oat: false,
//       regular: false,
//       nonFat: false,
//       skim: false,
//     },
//     additions: {
//       noFoam: false,
//       cinnamon: false,
//       caramel: false,
//       whippedCream: false,
//     },
//     instructions: "",
//   });

//   const [errors, setErrors] = useState({
//       name: '',
//       phone: ''
//   });

//   const [isDisabled, setIsDisabled] = useState(true);

//   useEffect(() => {
//       schema.isValid(formState).then(valid => setIsDisabled(!valid));
//   }, [formState, schema])

//   const validate = e => {
//       e.persist();
//       yup.reach(schema, e.target.name).validate(e.target.value)
//       .then(valid => setErrors({...errors, [e.target.name]: ''}))
//       .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}))
//   }

//   const handleChanges = (e) => {
//     if (e.target.type === 'checkbox') {
//         setFormState({ ...formState, additions: {
//             ...formState.additions, [e.target.value]: e.target.checked }});

//     } else {
//         setFormState({
//             ...formState,
//             [e.target.name]: e.target.value
//         })
//     } if (e.target.name === 'name' || e.target.name === "phone") {
//             validate(e)
//     }} ;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("https://reqres.in/api/users", formState)
//     .then(res => props.addOrder(res.data))
//     .catch(err => console.log(err));

//   };

//   const handleEdit = (e) => {
//       e.preventDefault();
//       props.saveOrder(formState);
//       setFormState({
//         name: "",
//         phone: "",
//         type: {
//           regular: false,
//           latte: false,
//           americano: false,
//           flatWhite: false,
//           espresso: false,
//           cappucino: false,
//         },
//         temp: {
//           iced: false,
//           hot: false,
//         },
//         milk: {
//           none: false,
//           soy: false,
//           almond: false,
//           oat: false,
//           regular: false,
//           nonFat: false,
//           skim: false,
//         },
//         additions: {
//           noFoam: false,
//           cinnamon: false,
//           caramel: false,
//           whippedCream: false,
//         },
//         instructions: "",
//       })
//   }
//   return (
//     <div>
//       <CoffeeDiv>
//         <h1>Customize your Order</h1>
//         <form
//           onSubmit={(e) => {
//             if (props.orderToEdit) handleEdit(e); else handleSubmit(e)}}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <label>
//             {" "}
//             Name:
//             <input
//               name="name"
//               value={formState.name}
//               placeholder="Enter Name..."
//               onChange={handleChanges}
//               data-cy="name"
//             />
//             {errors.name.length > 0 && <p style={{color:"red"}}>{errors.name}</p>}
//           </label>

//           <label>
//             {" "}
//             Phone Number:
//             <input
//               name="phone"
//               value={formState.phone}
//               placeholder="Enter Phone number..."
//               onChange={handleChanges}
//               data-cy="phone"
//             />
//              {errors.phone.length > 0 && <p style={{color:"red"}}>{errors.phone}</p>}
//           </label>
//           <label>
//             {" "}
//             Type of Coffee:
//             <select
//               name="type"
//               data-cy="type"
//               defaultValue="Regular"
//               onChange={handleChanges}
//             >
//               <option data-cy="regular" value="regular">Regular</option>
//               <option data-cy="latte" value="latte">Latte</option>
//               <option data-cy="espresso" value="espresso">Espresso</option>
//               <option data-cy="americano" value="americano">Americano</option>
//               <option data-cy="flatWhite" value="flatWhite">Flat White</option>
//               <option data-cy="cappucino" value="cappucino">Cappucino</option>
//             </select>
//           </label>
//           <label>
//             {" "}
//             Temperature:
//             <select name="temp" data-cy="temp" defaultValue="hot" value={formState.temp} onChange={handleChanges}>
//               <option data-cy="hot" value="hot">Hot</option>
//               <option data-cy="iced" value="iced">Iced</option>
//             </select>
//           </label>
//           <label>
//             {" "}
//             Choice of Milk:
//             <select name="milk" data-cy="milk" defaultValue="none" value={formState.milk} onChange={handleChanges}>
//               <option data-cy="none" value="none">None</option>
//               <option data-cy="soy" value="soy">Soy</option>
//               <option data-cy="almond" value="almond">Almond</option>
//               <option data-cy="oat" value="oat">Oat</option>
//               <option data-cy="regular" value="regular">Regular</option>
//               <option data-cy="nonFat" value="nonFat">Non-Fat</option>
//               <option data-cy="skim" value="skim">Skim</option>
//             </select>
//           </label>
//           <fieldset style={{border:"none"}}>
//             <label>Additions: </label> <br />
//             <label>
//               {" "}
//               <input type="checkbox" data-cy="noFoam" name="noFoam" onChange={handleChanges} value="noFoam" />
//               No Foam
//             </label>
//             <label>
//               {" "}
//               <input type="checkbox" data-cy="cinnamon" name="cinnamon" onChange={handleChanges} value="cinnamon"/>
//               Cinnamon
//             </label>
//             <br/>
//             <label>
//               {" "}
//               <input type="checkbox" data-cy="caramel" name="caramel" onChange={handleChanges} value="caramel"/>
//               Caramel
//             </label>
//             <label>
//               {" "}
//               <input type="checkbox" data-cy="whippedCream" name="whippedCream" onChange={handleChanges} value="whippedCream"/>
//               Whipped Cream
//             </label>
//           </fieldset>

//           <label>
//             {" "}
//             Special Instructions <br />
//             <textarea placeholder="Start Typing..." name="instructions" data-cy="instructions" onChange={handleChanges} value={formState.instructions}/>
//           </label>

//           <button
//             style={{
//               background: "black",
//               color: "white",
//               borderRadius: "8px",
//               width: "150px",
//               height: "40px",
//               fontSize: "1.2rem",
//               border: "none",
//               marginTop: "2%"
//             }}
//             type="submit"
//             disabled={isDisabled}
//             className="order-button"
//             data-cy="submit"
//           >
//             Order Now
//           </button>
//         </form>
//         <div style={{background: "white", color: "black"}}>
//         {props.orders.map((order, i) => <Orders key={i} order={order} cancelOrder={props.cancelOrder} editOrder={props.editOrder} />)}
//         </div>
//       </CoffeeDiv>

//       <img
//         src={img}
//         alt="coffee"
//         style={{
//           postion: "absolute",
//           width: "100vw",
//           height: "100vh",
//           overflow: "hidden",
//         }}
//       />

//     </div>
//   );
// };

// export default CoffeeForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

const PizzaNiceForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid black;
  width: 600px;
  background-color: lightgreen;
  p {
    margin: 10px auto;
  }
  h3 {
    margin: 20px auto;
  }
  label {
    margin: 10px 30px;
  }
  label input {
    margin-left: 10px;
  }
  div label input {
    margin-left: 0px;
  }
  label select {
    margin-left: 10px;
  }
  label textarea {
    margin-top: 10px;
  }
  button {
    padding: 10px;
    margin: 10px auto;
    background: white;
    font-size: 1.2rem;
    :hover {
      opacity: 0.7;
    }
  }
`;

const OrderCard = styled.div`
  border: 5px dashed black;
  border-radius: 20px;
  background-color: lightyellow;
  margin: 10px auto;
  width: 300px;
  p {
    margin: 5px auto;
  }
  button {
    margin: 10px;
    padding: 10px;
    background-color: white;
    :hover {
      opacity: 0.7;
    }
  }
`;

const PizzaForm = () => {
  const defaultOrder = {
    id: "",
    name: "",
    tel: "",
    vegan: false,
    crustChoice: "Cauliflower",
    olives: false,
    bellPeppers: false,
    sunDriedTomatoes: false,
    cheese: false,
    special: ""
  };

  const schema = yup.object().shape({
    name: yup.string().min(2).required("Enter a Name"),
    tel: yup
      .string()
      .matches(/^\d+$/, "Enter valid number")
      .min(10)
      .required("Enter a Phone Number"),

    vegan: yup.boolean(),
    crustChoice: yup.string().required("Select Choice of Crust"),
    olives: yup.boolean(),
    bellPeppers: yup.boolean(),
    sunDriedTomatoes: yup.boolean(),
    cheese: yup.boolean(),
    special: yup.string()
  });

  const [order, setOrder] = useState(defaultOrder);
  const [orders, setOrders] = useState([]);
  const [edit, setEdit] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({
    ...defaultOrder,
    olives: "",
    bellPeppers: "",
    sunDriedTomatoes: "",
    cheese: "",
    vegan: "",
    crustChoice: ""
  });

  useEffect(() => {
    schema.isValid(order).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [order]);

  const validate = (e) => {
    e.persist();

    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setOrder({ ...order, [e.target.name]: value });
    validate(e);
  };

  const addOrder = (e) => {
    e.preventDefault();
    setOrder(defaultOrder);
    axios
      .post("https://reqres.in/api/users", order)
      .then((response) => {
        setOrders([...orders, response.data]);
      })
      .catch((err) => console.log(err));
  };

  const saveOrder = (e) => {
    e.preventDefault();
    const listOfOrders = orders.map((singleOrder) => {
      if (singleOrder.id === order.id) return order;
      else return singleOrder;
    });
    setOrders(listOfOrders);
    setOrder(defaultOrder);
    setEdit(false);

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
      button.disabled = false;
    });
    document.querySelector(".Order__Button").textContent = "Order";
  };

  const editOrder = (myOrder) => {
    document.querySelector(".Order__Button").textContent = "Save";
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
      button.disabled = true;
    });

    setEdit(true);
    setOrder(myOrder);
  };

  const cancelOrder = (myOrder) => {
    const listOfOrders = [...orders];
    listOfOrders.splice(listOfOrders.indexOf(myOrder), 1);
    setOrders(listOfOrders);
  };

  return (
    <div>
      <PizzaNiceForm
        onSubmit={(e) => {
          if (edit === true) saveOrder(e);
          else addOrder(e);
        }}
      >
        <h3>Order Pizza</h3>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            data-cy="name"
            value={order.name || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.name}</p>
        <label htmlFor="tel">
          Tel:
          <input
            type="text"
            id="tel"
            name="tel"
            placeholder="Enter telephone number"
            data-cy="tel"
            value={order.tel || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.tel}</p>

        <label>
          Vegan:
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={order.vegan}
              value={order.vegan}
              data-cy="vegan"
              onChange={handleChange}
            />
            *All selected toppings will be plant based.
          </label>
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.temperature}</p>
        <label htmlFor="crustChoice">
          Choice of Crust:
          <select
            id="crustChoice"
            name="crustChoice"
            data-cy="crustChoice"
            value={order.crustChoice || ""}
            onChange={handleChange}
          >
            <option value="Thin">Thin</option>
            <option value="Cauliflower">Cauliflower</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.milkChoice}</p>
        <p>Toppings:</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto"
          }}
        >
          <label>
            <input
              type="checkbox"
              name="olives"
              checked={order.olives}
              value={order.olives}
              data-cy="olives"
              onChange={handleChange}
            />
            Olives
          </label>
          <p style={{ color: "red", fontSize: ".8rem" }}>{errors.olives}</p>
          <label>
            <input
              type="checkbox"
              name="bellPeppers"
              checked={order.bellPeppers}
              value={order.bellPeppers}
              data-cy="bellPeppers"
              onChange={handleChange}
            />
            Bell Peppers
          </label>
          <p style={{ color: "red", fontSize: ".8rem" }}>
            {errors.bellPeppers}
          </p>
          <label>
            <input
              type="checkbox"
              name="sunDriedTomatoes"
              checked={order.sunDriedTomatoes}
              value={order.sunDriedTomatoes}
              data-cy="sunDriedTomatoes"
              onChange={handleChange}
            />
            Sun Dried Tomatoes
          </label>
          <p style={{ color: "red", fontSize: ".8rem" }}>
            {errors.sunDriedTomatoes}
          </p>
          <label>
            <input
              type="checkbox"
              name="cheese"
              checked={order.cheese}
              value={order.cheese}
              data-cy="cheese"
              onChange={handleChange}
            />
            Cheese
          </label>
          <p style={{ color: "red", fontSize: ".8rem" }}>{errors.cheese}</p>
        </div>

        <label htmlFor="special">
          Special Instructions:
          <textarea
            id="special"
            name="special"
            data-cy="special"
            value={order.special || ""}
            onChange={handleChange}
            cols="60"
            rows="5"
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.special}</p>
        <button
          type="submit"
          name="submit"
          className="Order__Button"
          disabled={buttonDisabled}
          data-cy="submit"
        >
          Order
        </button>
      </PizzaNiceForm>
      <h3>List of Orders</h3>
      {orders.map((myOrder) => {
        return (
          <OrderCard key={myOrder.id}>
            {/* <pre>{JSON.stringify(myOrder, 2, null)}</pre> */}
            <p>Name: {myOrder.name}</p>

            <p>Tel: {myOrder.tel}</p>

            <p>Vegan: {myOrder.vegan === true ? "Yes" : "No"}</p>

            <p>Choice of Crust: {myOrder.crustChoice}</p>

            <p>Olives: {myOrder.olives === true ? "Yes" : "No"}</p>

            <p>Bell Peppers: {myOrder.bellPeppers === true ? "Yes" : "No"}</p>
            <p>
              Sun Dried Tomatoes:{" "}
              {myOrder.sunDriedTomatoes === true ? "Yes" : "No"}
            </p>

            <p>Cheese: {myOrder.cheese === true ? "Yes" : "No"}</p>
            <p>Special Instructions: {myOrder.special}</p>

            <button
              name="edit"
              className="edit"
              data-cy="edit"
              onClick={() => editOrder(myOrder)}
            >
              Edit
            </button>
            <button
              name="cancel"
              data-cy="cancel"
              onClick={() => cancelOrder(myOrder)}
            >
              Cancel
            </button>
          </OrderCard>
        );
      })}
    </div>
  );
};

export default PizzaForm;
