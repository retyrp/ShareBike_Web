using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ShareBike_Web.Users
{
    public partial class Site : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                username_label.Text = "欢迎您：" + Session["username"].ToString();
                HyperLink1.NavigateUrl = "http://" + GetLocalIPAddress() + ConfigurationManager.AppSettings["Service_port"]+ "/service.aspx";
                HyperLink2.NavigateUrl = "http://"+GetLocalIPAddress()+ ConfigurationManager.AppSettings["Service_port"] + "/default.aspx";
                HyperLink3.NavigateUrl = "http://" + GetLocalIPAddress() + ConfigurationManager.AppSettings["Service_port"] + "/problem.aspx";
                HyperLink4.NavigateUrl = "http://" + GetLocalIPAddress() + ConfigurationManager.AppSettings["Service_port"] + "/service.aspx";
                HyperLink5.NavigateUrl = "http://" + GetLocalIPAddress() + ConfigurationManager.AppSettings["Service_port"] + "/activity.aspx";
                HyperLink6.NavigateUrl = "http://" + GetLocalIPAddress() + ConfigurationManager.AppSettings["Service_port"] + "/default.aspx";
                HyperLink7.NavigateUrl = "http://" + GetLocalIPAddress() + ConfigurationManager.AppSettings["Service_port"] + "/about.aspx";
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