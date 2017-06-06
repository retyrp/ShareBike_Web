<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="ShareBike_Web.Account.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>欢迎登录</title>
    <link rel="Stylesheet" type="text/css" href="../css/bootstrap.css"/>
    <link rel="Stylesheet" type="text/css" href="../css/tt.css" />
</head>
<body>
    <header>
        <label style="color: Gray">
            欢迎登录</label>
    </header>
    <section id="main" class="row">
        <section class="login-section col-xs-12 col-md-6">
        </section>
        <section class="login-section col-xs-12 col-md-6">
            <form id="form1" runat="server">
            <div id="user" hidden="hidden">
                <table>
                    <caption>
                        用户登录</caption>
                    <tbody>
                        <tr>
                            <td class="title">
                                用户ID
                            </td>
                            <td>
                                <asp:TextBox ID="txtCode" name="txtCode" runat="server" placeholder="请输入代码" CssClass="form-control inputbox"
                                    autofocus></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="title">
                                密 &nbsp 码
                            </td>
                            <td class="text">
                                <asp:TextBox ID="txtPwd" runat="server" placeholder="请输入密码" CssClass="form-control inputbox"
                                    TextMode="Password"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td colspan="2" class="btn_btn">
                                <asp:Button ID="btnOK" runat="server" Text="确定" CssClass="btn btn-primary" OnClick="buttonLogin_Click" />&nbsp;&nbsp;
                                <button type="button" class="btn btn-success" onclick="ctrl2()">
                                    注册</button>&nbsp;&nbsp;
                            </td>
                        </tr>
                </table>
            </div>
            <div id="user_">
                <table>
                    <caption>
                        用户注册</caption>
                    <tbody>
                        <tr>
                            <td class="title">
                                用户ID
                            </td>
                            <td>
                                <asp:TextBox ID="txtCode_" name="txtCode" runat="server" placeholder="请输入代码" CssClass="form-control inputbox"
                                    autofocus></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="title">
                                用户姓名
                            </td>
                            <td>
                                <asp:TextBox ID="txtName" name="txtName" runat="server" placeholder="请输入姓名" CssClass="form-control inputbox"
                                    autofocus></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="title">
                                密 &nbsp 码
                            </td>
                            <td class="text">
                                <asp:TextBox ID="txtPwd_" runat="server" placeholder="请输入密码" CssClass="form-control inputbox"
                                    TextMode="Password"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="btn_btn">
                                <asp:Button ID="btnOK_" runat="server" Text="提交" CssClass="btn btn-primary" OnClick="buttonLogin_Click_" />&nbsp;
                                <button type="button" class="btn btn-success" onclick="ctrl1()">返回登录</button>&nbsp;&nbsp;
                            </td>
                        </tr>
                </table>
            </div>
            </form>
        </section>
    </section>
    <footer><strong>Designed by</strong> retyrp@outlook.com</footer>
</body>
<script type="text/javascript">
    function ctrl1() {
        var a = document.getElementById("user");
        var b = document.getElementById("user_");
        a.style.display = 'block';
        b.style.display = 'none';
    }
    function ctrl2() {
        var a = document.getElementById("user");
        var b = document.getElementById("user_");
        a.style.display = 'none';
        b.style.display = 'block';
    }
</script>
</html>
