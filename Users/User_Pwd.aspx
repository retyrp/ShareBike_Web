<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="User_Pwd.aspx.cs" Inherits="ShareBike_Web.Users.WebForm7" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <form runat="server" id="ititit">
    <div class="page animsition">
        <div class="page-header page-header-bordered">
            <ol class="breadcrumb">
                <li><a href="clientarea.php"><i class="site-menu-icon wb-grid-9"></i>首页</a></li>
                <li><a href="javascript:void(0)">密码修改</a></li>
            </ol>
        </div>
        <div class="page-content container-fluid container-table">
            <div class="panel" style="margin: 0px;">
                <div class="panel-heading">
                    <h3 class="panel-title">密码修改</h3>
                </div>
                <div class="panel-body">
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                        确认
                    </button>
                </div>
            </div>
        </div>

         <div class="row">
        <div class="col-sm-6">
            <div class="form-group">
                <label for="inputFirstName" class="control-label">原密码</label>
                <asp:TextBox ID="oldpwd" runat="server" CssClass="form-control"></asp:TextBox>
            </div>
            <div class="form-group">
                <label for="inputFirstName" class="control-label">新密码</label>
                <asp:TextBox ID="newpwd" runat="server" CssClass="form-control"></asp:TextBox>
            </div>
            <div class="form-group text-center">
                <asp:Button runat="server" Text="保存修改" CssClass="btn-primary btn" OnClick="Unnamed_Click"></asp:Button>
                <input class="btn btn-default" type="reset" value="取消" />
            </div>
        </div>
    </div>
    </div>




    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        密码修改须知
    </button>
   
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">修改密码须知</h4>
                </div>
                <div class="modal-body">
                    <asp:Label runat="server" ID="source" Text="密码修改两次密码不能相同"></asp:Label>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary">确定</button>
                </div>
            </div>
        </div>
    </div>

        </form>
</asp:Content>
