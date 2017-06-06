<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="ShareBike_Web.Users.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">



<div class="page animsition">
        <div class="page-header page-header-bordered">
            <ol class="breadcrumb">
                <li><a href="clientarea.php"><i class="site-menu-icon wb-grid-9"></i>首页</a></li>
                <li><a href="javascript:void(0)">单车预订</a></li>
            </ol>
        </div>
        <div class="page-content container-fluid container-table">
            <div class="panel" style="margin: 0px;">
                <div class="panel-heading">
                    <h3 class="panel-title">欢迎预订</h3>
                </div>
                <div class="panel-body">
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  立即预订
</button>
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  停止使用
</button>
                </div>
            </div>
        </div>
    </div>




<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  预订单车
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
        <h4 class="modal-title" id="myModalLabel">预订结果</h4>
      </div>
      <div class="modal-body">
        <asp:label runat="server" ID ="source" Text="操作成功"></asp:label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary">确定</button>
      </div>
    </div>
  </div>
</div>
</asp:Content>
