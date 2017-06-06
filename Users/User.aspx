<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="User.aspx.cs" Inherits="ShareBike_Web.Users.User" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div class="page animsition">
            <div class="page-header page-header-bordered">
                <ol class="breadcrumb">
                    <li><a href="#"><i class="site-menu-icon wb-grid-9"></i>首页</a></li>
                </ol>
            </div>
            <div class="page-content container-fluid">
                <div class="panels">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <a href="#">
                                <div class="dashboard-tile detail tile-red">
                                    <div class="content">
                                        <asp:Label ID="money" runat="server" Text="label" CssClass="text-left timer"></asp:Label>
                                        <p>可用余额</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-credit-card-alt"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <a href="#">
                                <div class="dashboard-tile detail tile-turquoise">
                                    <div class="content">
                                        <asp:Label ID="MyBike" runat="server" Text="label" CssClass="text-left timer"></asp:Label>
                                        <p>我的单车</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-tasks"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <a href="#">
                                <div class="dashboard-tile detail tile-blue">
                                    <div class="content">
                                        <asp:Label ID="MyCoin" runat="server" Text="label" CssClass="text-left timer"></asp:Label>
                                        <p>我的积分</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa fa-link"></i>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                <div class="clienthome-panels">
                    <div class="row">
                        <div class="col-sm-6">

                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="list-group">
                                        <asp:HyperLink ID="HyperLink1" runat="server" CssClass="list-group-item">共享单车使用说明<br />
                                            <span class="text-last-updated">2017-03-31</span>
                                        </asp:HyperLink>
                                        <asp:HyperLink ID="HyperLink2" runat="server" CssClass="list-group-item">关于违规使用的公告<br />
                                            <span class="text-last-updated">2017-03-10</span>
                                        </asp:HyperLink>
                                        <asp:HyperLink ID="HyperLink3" runat="server" CssClass="list-group-item">常见问题解答<br />
                                            <span class="text-last-updated">2017-02-16</span>
                                        </asp:HyperLink>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</asp:Content>
