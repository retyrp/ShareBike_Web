using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using nit;
namespace ShareBike_Web.Users
{
    public partial class WebForm5 : System.Web.UI.Page
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
            init();
        }

        private void init()
        {
            nit.User u = new nit.User(Session["usercode"].ToString());
            String[] temp = u._getInfo().Split(',');
            if (temp[4].Equals("是"))
            {
                Response.Write("<script>alert('用户已认证！');location.href='../Users/User.aspx'</script>");
                //Response.Redirect("../Users/User.aspx");
            }
        }

        protected void submit_Click(object sender, EventArgs e)
        {
            nit.User u = new nit.User(Session["usercode"].ToString());
            if (u.confirm())
            {
                Response.Write("<script>alert('用户已认证！');location.href='../Users/User.aspx'</script>");
            }                
        }
    }
}