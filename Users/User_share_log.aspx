<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="User_share_log.aspx.cs" Inherits="ShareBike_Web.Users.WebForm4" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">

    <form id="formmain" runat="server">

        <div class="page animsition">
            <div class="page-header page-header-bordered">
                <ol class="breadcrumb">
                    <li><a href="clientarea.php"><i class="site-menu-icon wb-grid-9"></i>首页</a></li>
                    <li><a href="javascript:void(0)">共享记录</a></li>
                </ol>
            </div>
            <div class="page-content container-fluid container-table">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">共享记录</h3>
                    </div>
                    <div class="panel-body">
                        <div class="table-container clearfix">
                            <div id="tableInvoicesList_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                <div class="listtable">
                                    <div id="tableInvoicesList_filter" class="dataTables_filter">
                                    </div>
                                    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" AutoGenerateColumns="False" DataKeyNames="shareLogID" DataSourceID="SqlDataSource1" CssClass="table table-list table-hover dataTable no-footer dtr-inline" PageSize="3">
                                        <Columns>
                                            <asp:BoundField DataField="shareLogID" HeaderText="shareLogID" ReadOnly="True" SortExpression="shareLogID" />
                                            <asp:BoundField DataField="shareBikeID" HeaderText="shareBikeID" SortExpression="shareBikeID" />
                                            <asp:BoundField DataField="shareUserID" HeaderText="shareUserID" SortExpression="shareUserID" />
                                            <asp:BoundField DataField="shareTime" HeaderText="shareTime" SortExpression="shareTime" />
                                            <asp:BoundField DataField="shareTime_" HeaderText="shareTime_" SortExpression="shareTime_" />
                                            <asp:BoundField DataField="shareMoney" HeaderText="shareMoney" SortExpression="shareMoney" />
                                        </Columns>
                                        <PagerTemplate>
                                            <br />
                                            <asp:Label ID="lblPage" runat="server" CssClass="btn-" Text='<%# "第" + (((GridView)Container.NamingContainer).PageIndex + 1)  + "页/共" + (((GridView)Container.NamingContainer).PageCount) + "页" %> '></asp:Label>
                                            <asp:LinkButton ID="lbnFirst" runat="Server" Text="首页" CssClass="btn-bottom" Enabled='<%# ((GridView)Container.NamingContainer).PageIndex != 0 %>' CommandName="Page" CommandArgument="First"></asp:LinkButton>
                                            <asp:LinkButton ID="lbnPrev" runat="server" Text="上一页" CssClass="btn-bottom" Enabled='<%# ((GridView)Container.NamingContainer).PageIndex != 0 %>' CommandName="Page" CommandArgument="Prev"></asp:LinkButton>
                                            <asp:LinkButton ID="lbnNext" runat="Server" Text="下一页" CssClass="btn-bottom" Enabled='<%# ((GridView)Container.NamingContainer).PageIndex != (((GridView)Container.NamingContainer).PageCount - 1) %>' CommandName="Page" CommandArgument="Next"></asp:LinkButton>
                                            <asp:LinkButton ID="lbnLast" runat="Server" Text="尾页" CssClass="btn-bottom" Enabled='<%# ((GridView)Container.NamingContainer).PageIndex != (((GridView)Container.NamingContainer).PageCount - 1) %>' CommandName="Page" CommandArgument="Last"></asp:LinkButton>
                                            <br />
                                        </PagerTemplate>
                                    </asp:GridView>
                                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:_userConnectionString2 %>" SelectCommand="SELECT * FROM [_shareLog] WHERE ([shareUserID] = @shareUserID)">
                                        <SelectParameters>
                                            <asp:SessionParameter Name="shareUserID" SessionField="usercode" Type="String" />
                                        </SelectParameters>
                                    </asp:SqlDataSource>
                                </div>
                                <div class="dataTables_length" id="tableInvoicesList_length">
                                    <label>
                                        每页显示
                                    <select id="Select1" name="tableInvoicesList_length" class="form-control input-sm" runat="server">
                                        <option value="3">3</option>
                                        <option value="6">6</option>
                                        <option value="10">10</option>
                                    </select>
                                        条</label>&nbsp;&nbsp
                                    <asp:Button runat="server" CssClass="btn-primary btn" Text="确定" OnClick="pageSize_Click"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </form>

</asp:Content>
