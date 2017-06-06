using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ShareBike_Web.Users
{
    public partial class WebForm3 : System.Web.UI.Page
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
        private void select_change(int k)
        {
            GridView1.PageSize = k;
        }

        protected void pageSize_Click(object sender, EventArgs e)
        {
            GridView1.PageSize = int.Parse(Select1.Value);
        }
    }
}