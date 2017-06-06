using nit;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ShareBike_Web.Account
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void buttonLogin_Click(object sender, EventArgs e)
        {
            string sCode;
            string sPwd;
            string sName;
            sCode = txtCode.Text.Trim();
            sPwd = txtPwd.Text.Trim();

            User user = new User(sCode);
            if(user.Login(sPwd.Trim()))
            {
                Session.Add("usercode",sCode);
                Session.Add("username", user.UserName);
                Response.Redirect("../Users/User.aspx");
            }
            else
            {
                Response.Write("<script>alert('用户检验错误！');</script>");
            }
        }

        protected void buttonLogin_Click_(object sender, EventArgs e)
        {
            string sCode;
            string sPwd;
            string sName;
            sCode = txtCode_.Text.Trim();
            sPwd = txtPwd_.Text.Trim();
            sName = txtName.Text.Trim();

            User user = new User(sCode,sName,sPwd);
            if (user.Register())
            {
                Console.Write("<script>alert('注册成功，即将跳转至登录页面');</script>");
            }
            else
            {
                Console.Write("<script>alert('注册失败，请联系网络管理员');</script>");
            }
           /*if (1 == helper.Update(sql))
            {
                Console.Write("<script>alert('注册成功，即将跳转至登录页面');</script>");
            }
            else
            {
                Console.Write("<script>alert('注册失败，请联系网络管理员');</script>");
            }*/
        }
    }
}