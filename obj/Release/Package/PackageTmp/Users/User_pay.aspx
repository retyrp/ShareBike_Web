<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="User_pay.aspx.cs" Inherits="ShareBike_Web.Users.WebForm6" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div class="page animsition">
        <div class="page-header page-header-bordered">
            <ol class="breadcrumb">
                <li><a href="clientarea.php"><i class="site-menu-icon wb-grid-9"></i>首页</a></li>
                <li><a href="#">账户充值</a></li>
            </ol>
        </div>
        <div class="page-content container-fluid container-table">
            <div class="panel" style="margin: 0px;">
                <div class="panel-heading">
                    <h3 class="panel-title">账户充值</h3>
                </div>
                <div class="panel-body">
                    <form method="post" action="#" role="form" runat="server">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputID" class="control-label">充值账户ID</label>
                                    <asp:TextBox ID="username" runat="server" value="" CssClass="form-control"></asp:TextBox>
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
                                    <label for="inputPhone" class="control-label">充值金额(单位：元)</label>
                                    <asp:TextBox ID="payin" runat="server" text = "0" value="0" CssClass="form-control"></asp:TextBox>
                                </div>
                            </div>
                        <div class="form-group text-center">
                            <asp:Button runat="server" Text="确认充值" CssClass="btn-primary btn" OnClick="Unnamed_Click"></asp:Button>
                            <input class="btn btn-default" type="reset" value="取消" />
                        </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
