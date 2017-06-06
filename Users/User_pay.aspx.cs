using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using nit;

namespace ShareBike_Web.Users
{
    public partial class WebForm6 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (Session.ToString() == null)
                    Session.Abandon();
            }
            catch (Exception)
            {
                Response.Redirect("../HomePage.aspx");
                throw;
            }
            username.Text = Session["usercode"].ToString();
        }

        protected void Unnamed_Click(object sender, EventArgs e)
        {
            nit.User u = new nit.User(Session["usercode"].ToString());
            
            if(u._userPay(Session["usercode"].ToString(),payin.Text))
                Response.Write("<script>alert('充值成功！');</script>");
        }
    }
}