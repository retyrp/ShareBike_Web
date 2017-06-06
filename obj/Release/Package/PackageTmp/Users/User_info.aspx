<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="User_info.aspx.cs" Inherits="ShareBike_Web.Users.WebForm2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div class="page animsition">
        <div class="page-header page-header-bordered">
            <ol class="breadcrumb">
                <li><a href="clientarea.php"><i class="site-menu-icon wb-grid-9"></i>首页</a></li>
                <li><a href="javascript:void(0)">个人资料</a></li>
            </ol>
        </div>
        <div class="page-content container-fluid container-table">
            <div class="panel" style="margin: 0px;">
                <div class="panel-heading">
                    <h3 class="panel-title">我的资料</h3>
                </div>
                <div class="panel-body">
                    <form method="post" action="#" role="form" runat="server">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputFirstName" class="control-label">姓名</label>
                                    <asp:TextBox ID="username" runat="server" value="瑞平" CssClass="form-control"></asp:TextBox>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail" class="control-label">邮件地址</label>
                                    <asp:TextBox ID="email" runat="server" value="retyrp@outlook.com" CssClass="form-control"></asp:TextBox>
                                </div>
                                <div class="form-group">
                                    <label for="inputPhone" class="control-label">电话号码</label>
                                    <asp:TextBox ID="phonenumber" runat="server" value="18679426787" CssClass="form-control"></asp:TextBox>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-12 pull-left">
                                <div class="form-group">
                                    <label for="inputPaymentMethod" class="control-label">付款方式</label>
                                    <select name="paymentmethod" id="inputPaymentMethod" class="form-control" runat="server">
                                        <option value="unionpay">银联快捷支付</option>
                                        <option value="alipay">支付宝及时到账</option>
                                        <option value="tenpay">微信支付</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="inputPhone" class="control-label">是否实名认证</label>
                                    <asp:TextBox ID="Confirm" runat="server" value="是" CssClass="form-control" ReadOnly="true"></asp:TextBox>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">QQ</label>
                                    <div class="control">
                                        <asp:TextBox ID="QQ" runat="server" value="792836095" CssClass="form-control"></asp:TextBox>
                                    </div>
                                </div>
                            </div>
                        <div class="form-group text-center">
                            <asp:Button runat="server" Text="保存修改" CssClass="btn-primary btn" OnClick="confirm_Click"></asp:Button>
                            <input class="btn btn-default" type="reset" value="取消" />
                        </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
