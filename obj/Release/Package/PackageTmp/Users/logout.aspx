<%@ Page Title="" Language="C#" MasterPageFile="~/Users/Site.Master" AutoEventWireup="true" CodeBehind="logout.aspx.cs" Inherits="ShareBike_Web.Users.WebForm8" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <%Session.Abandon(); %>
    <script>location.href="../HomePage.aspx"</script>
</asp:Content>
