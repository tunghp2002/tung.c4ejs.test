import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock, sizes } = product;

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    if (amount < stock) {
      if (amount + 1 === stock) {
        setAmount(stock);
        alert("Alert: Vui lòng liên hệ trực tiếp để mua số lượng lớn với giá ưu đãi.");
      } else {
        setAmount(amount + 1);
      }
    }
  };

  const handleAddToCart = () => {
    if (!color || !size) {
      alert("Vui lòng chọn màu sắc và kích cỡ.");
    } else {
      addToCart(id, color, amount, size, product);
      alert("Sản phẩm đã được thêm vào giỏ hàng.");
    }
  };

  const handleAddToCartClick = () => {
    if (!color || !size) {
      alert("Vui lòng chọn màu sắc và kích cỡ.");
    } else {
      handleAddToCart();
    }
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <FaCheck className="checkStyle" /> : null}
            </button>
          ))}
        </p>
      </div>

      <div className="sizes">
        <p>Size:</p>
        <div className="size-grid">
          {sizes.map((curSize, index) => (
            <button
              key={index}
              className={curSize === size ? "active" : ""}
              onClick={() => setSize(curSize)}
            >
              {curSize}
              {size === curSize ? <FaCheck className="checkStyleSize" /> : null}
            </button>
          ))}
        </div>
      </div>

      <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />

      <Button className="btn" onClick={handleAddToCartClick}>
        Add To Cart
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .sizes {
    margin-top: 2rem;
  }
  
  .sizes p {
    font-size: 1.6rem;
    font-weight: bold;
    margin-right: 1.6rem;
  }
  
  .size-grid {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.8rem;
  }
  
  .size-grid button {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    color: #333;
    cursor: pointer;
    font-size: 1.6rem;
    margin-right: 0.8rem;
    margin-bottom: 0.8rem;
    padding: 0.8rem 1.2rem;
    transition: all 0.2s ease-in-out;
  }
  
  .size-grid button:hover {
    background-color: ${({ theme }) => theme.colors.btn};
    border-color: ${({ theme }) => theme.colors.btn};
    color: #fff;
  }

`;
export default AddToCart;