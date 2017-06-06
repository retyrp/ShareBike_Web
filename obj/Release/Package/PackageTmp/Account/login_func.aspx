<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login_func.aspx.cs" Inherits="ShareBike_Web.Account.login_func" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="../css/StyleSheet2.css"/>
    <title></title>
    <script language="text/javascript">top.opener=null;top.close();parent.close()</script>
</head>
<body>
        <div class="login_form">
            <form id="loginform" runat="server" action="" autocomplete="off" name="loginform" method="post" target="0" style="margin: 0px">
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
                        <span class="lock_tips_row"></span><span>大写锁定已打开</span>
                    </div>

                </div>
                <div col="2">
                    <div class="submit">
                        <a class="login_button">
                            <asp:Button runat="server" tabindex="6" Text="登 录" CssClass="btn" id="login_button" OnClick="Login_click"></asp:Button> </a>
                    </div>
                    <div class="register">
                        <a class="login_button">
                        <asp:Button runat="server" tabindex="6" Text="注 册" CssClass="btn" id="region_button" OnClick="Regedit_click"></asp:Button></a>
                    </div>
                </div>
            </form>
        </div>
</body>
</html>
