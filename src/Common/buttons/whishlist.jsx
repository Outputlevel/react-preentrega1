import Button from 'react-bootstrap/Button';



const BtnWishlist = ({onClickBtn, btnText}) => {

    return (
    <Button variant="primary" onClick={onClickBtn}>{btnText}</Button>
    )
}

export default BtnWishlist