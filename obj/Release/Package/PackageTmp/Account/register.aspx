<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="register.aspx.cs" Inherits="ShareBike_Web.Account.register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <div class="register_form">
            <form id="registerform" runat="server" action="" autocomplete="off" name="loginform" method="post" target="0" style="margin: 0px">
                <div class="uinArea" id="uinArea">
                    <label class="input_tips" id="uin_tips">支持QQ号/邮箱/手机号登录</label>
                    <div class="inputOuter">
                        <asp:TextBox runat="server" CssClass="inputstyle" id="u" name="u" tabindex="1"></asp:TextBox>
                    </div>


                </div>
                <div class="pwdArea" id="pwdArea">
                    <label class="input_tips" id="pwd_tips" for="p" style="display: block;">密码</label>
                    <div class="inputOuter">
                        <asp:TextBox runat="server" TextMode="Password" CssClass="inputstyle password" id="p" name="p" value="" maxlength="16" tabindex="2"></asp:TextBox>
                    </div>
                    <div class="lock_tips" id="caps_lock_tips" style="display: none;">
                        <asp:Label ID="Label1" runat="server" Text="大写锁定已打开" Visible="false"></asp:Label>
                        <span class="lock_tips_row"></span><span></span>
                    </div>

                </div>
                <div class="submit" col="2">
                        <asp:Button runat="server" tabindex="6" Text="登 录" CssClass="btn" id="login_button" OnClick="Login_click"></asp:Button> 
                </div>
                <div class="submit">
                        <asp:Button runat="server" tabindex="6" Text="注 册" CssClass="btn" id="region_button" OnClick="Regedit_click"></asp:Button> 
                </div>
            </form>
        </div>
</body>
</html>
