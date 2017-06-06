using nit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Runtime.InteropServices;

namespace ShareBike_Web.Account
{
    public partial class login_func : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["usercode"] != null)
            {
                Response.Redirect("../Users/User.aspx");
            }

        }

        protected void Login_click(object sender, EventArgs e)
        {
            string sCode;
            string sPwd;
            sCode = u.Text.Trim();
            sPwd = p.Text.Trim();

            User user = new User(sCode);
            if (user.Login(sPwd.Trim()))
            {
                Session.Add("usercode", sCode);
                Session.Add("username", user.UserName);
                Response.Redirect("../Users/User.aspx");
            }
            else
            {
                Response.Write("<script>alert('用户检验错误！');</script>");
                Response.Redirect("../Account/Login.aspx");
            }
        }
        protected void Regedit_click(object sender, EventArgs e)
        {
            Response.Redirect("../Account/Login.aspx");
        }
    }
}