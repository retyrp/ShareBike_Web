using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ShareBike_Web
{
    public partial class HomePage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            HyperLink1.NavigateUrl = "http://" + GetLocalIPAddress() + ConfigurationManager.AppSettings["Talk_port"] + "/Default.aspx";

            if (Session.IsNewSession) ;
            //Page.FindControl("login_frame").Visible=true; 
            else
                ClientScript.RegisterStartupScript(Page.GetType(), "", "<script language=javascript>window.opener=null;window.open('','_self');window.close();</script>");
            //this.FindControl("login_frame").Visible = false;

        }

        private string GetLocalIPAddress()
        {
            IPAddress ipAddr = Dns.Resolve(Dns.GetHostName()).AddressList[0];
            return ipAddr.ToString();
        }
    }
}