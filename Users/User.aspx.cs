using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using nit;
using System.Net;

namespace ShareBike_Web.Users
{
    public partial class User : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            init();
            HyperLink1.NavigateUrl = "http://" + GetLocalIPAddress() + ":7612/activity.aspx";
            HyperLink2.NavigateUrl = "http://" + GetLocalIPAddress() + ":7612/news.aspx";
            HyperLink3.NavigateUrl = "http://" + GetLocalIPAddress() + ":7612/problem.aspx";
        }

        private void init()
        {
            try
            {
                nit.User u = new nit.User(Session["usercode"].ToString());
                money.Text = u._userPay() + "  Yuan";
                MyBike.Text = u._userBike();
                MyCoin.Text = u._userCoin();
            }
            catch (Exception)
            {
                Response.Redirect("../HomePage.aspx");
                throw;
            }
        }

        private string GetLocalIPAddress()
        {
            IPAddress ipAddr = Dns.Resolve(Dns.GetHostName()).AddressList[0];
            return ipAddr.ToString();
        }
    }
}