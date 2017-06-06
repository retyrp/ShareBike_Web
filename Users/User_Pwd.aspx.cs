using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using nit;
namespace ShareBike_Web.Users
{
    public partial class WebForm7 : System.Web.UI.Page
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
        }

        protected void Unnamed_Click(object sender, EventArgs e)
        {
            nit.User u = new nit.User(Session["usercode"].ToString());

            if (u._userPwd(oldpwd.Text, newpwd.Text))
                Response.Write("<script>alert('密码已修改！');location.href='../Users/User.aspx'</script>");
            else
                Response.Write("<script>alert('密码修改失败，请检查原密码！')");
        }
    }
}