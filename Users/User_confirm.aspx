<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="User_confirm.aspx.cs" Inherits="ShareBike_Web.Users.WebForm5" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div class="page animsition">
        <div class="page-header page-header-bordered">
            <ol class="breadcrumb">
                <li><a href="clientarea.php"><i class="site-menu-icon wb-grid-9"></i>首页</a></li>
                <li><a href="javascript:void(0)">认证</a></li>
            </ol>
        </div>
        <div class="page-content container-fluid container-table">
            <div class="panel" style="margin: 0px;">
                <div class="panel-heading">
                    <h3 class="panel-title">认证</h3>
                </div>
                <div class="panel-body">
                    <form method="post" action="#" role="form" runat="server">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputFirstName" class="control-label">姓名</label>
                                    <asp:TextBox ID="username" runat="server" value="" CssClass="form-control"></asp:TextBox>
                                </div>
                                <div class="form-group">
                                    <label for="inputID" class="control-label">身份证明</label>
                                    <asp:TextBox ID="email" runat="server" value="" CssClass="form-control"></asp:TextBox>
                                </div>
                                <div class="form-group">
                                    <label for="inputPhone" class="control-label">电话号码</label>
                                    <asp:TextBox ID="phonenumber" runat="server" value="18679426787" CssClass="form-control"></asp:TextBox>
                                </div>
                            </div>
                        </div>
                        <select id="Select1">
                            <option></option>

                        </select>
                        <div class="form-group text-center">
                            <asp:button ID="submit" runat="server" Text="确认提交" CssClass="btn-primary btn" OnClick="submit_Click"></asp:button>
                            <input class="btn btn-default" type="reset" value="取消" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</asp:Content>
