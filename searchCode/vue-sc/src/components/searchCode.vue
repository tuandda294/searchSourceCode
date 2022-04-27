<template>
  <section>
    <div class="img-bg">
        <img src="https://www.jobhopin.com/blog/wp-content/uploads/2020/01/Untitled-design-2.png" alt="Hình Ảnh Minh Họa">
    </div>
    <div class="noi-dung">
        <div class="form">
            <h2>Login to search</h2>
            <form action="">
                <div class="input-form">
                    <span>Username</span>
                    <input type="text" name="" placeholder="Ex: tuandda@vmodev.com">
                </div>
                <div class="input-form">
                    <span>Password</span>
                    <input type="password" name="" placeholder="Password">
                </div>
                <div class="nho-dang-nhap">
                    <label><input type="checkbox" name=""> Remember Login</label>
                </div>
                <div class="input-form">
                    <input type="submit" value="Login">
                </div>
                <div class="input-form">
                    <p>Don't have account?<a href="#"> Register</a></p>
                </div>
            </form>
            <h3>Or login with</h3>
            <ul class="icon-dang-nhap">
                <li><i class="fa fa-facebook"></i></li>
                <li><i class="fa fa-google" ></i></li>
                <li><i class="fa fa-twitter" ></i></li>
            </ul>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'searchCode'
}
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
section{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
}
section .img-bg{
    position: relative;
    width: 80%;
    height: 100%;
    /* background-position: center;
    background-size: cover; */
}
section .img-bg img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
section .noi-dung{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}
section .noi-dung .form{
    width: 50%;
}
section .noi-dung .form h2{
    color: #1a2c35;
    font-weight: 500;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #8d4a4a;
    display: inline-block;
    letter-spacing: 1px;
}
section .noi-dung .form .input-form{
    margin-bottom: 20px;
}
section .noi-dung .form .input-form span{
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: #1a2c35;
    letter-spacing: 1px;
     }
section .noi-dung .form .input-form input{
    width: 100%;
    padding: 10px 20px;
    outline: none;
    border: 1px solid #1a2c35;
    font-size: 16px;
    letter-spacing: 1px;
    color: #1a2c35;
    background: transparent;
    border-radius: 30px;
    }
section .noi-dung .form .input-form input[type="submit"]{
    background: #8d4a4a;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
               0 2px 2px rgba(0,0,0,0.12),
               0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
}
section .noi-dung .form .input-form input[type="submit"]:hover{
    background: #8d4a4a;
}
section .noi-dung .form .nho-dang-nhap{
    margin-bottom: 10px;
    color: #1a2c35;
    font-size: 14px;
}
section .noi-dung .form .input-form p{
    color: #1a2c35;
}
section .noi-dung .form .input-form p a{
    color: #8d4a4a;
}
section .noi-dung .form h3{
    color: #1a2c35;
    text-align: center;
    margin: 80px 0 10px;
    font-weight: 500;
}
section .noi-dung .form .icon-dang-nhap{
    display: flex;
    justify-content: center;
    align-items: center;
}
section .noi-dung .form .icon-dang-nhap li{
    list-style: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
section .noi-dung .form .icon-dang-nhap li:nth-child(1){
    color: #3b5999;
}
section .noi-dung .form .icon-dang-nhap li:nth-child(2){
    color: #dd4b39;
}
section .noi-dung .form .icon-dang-nhap li:nth-child(3){
    color: #55acee;
}
section .noi-dung .form .icon-dang-nhap li i{
    font-size: 24px;
}
@media (max-width: 768px){
    section .img-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    section .noi-dung{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    section .noi-dung .form{
        width: 100%;
        padding: 40px;
        background: rgba(255 255 255 / 0.9);
        margin: 50px;
    }
    section .noi-dung .form h3{
        color: #1a2c35;
        text-align: center;
        margin: 30px 0 10px;
        font-weight: 500;
    }
}
</style>
