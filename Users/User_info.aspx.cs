using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using nit;

namespace ShareBike_Web.Users
{
    public partial class WebForm2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
                
            inti();
        }

        private void inti()
        {
            try
            {
                nit.User u = new nit.User(Session["usercode"].ToString());
                String[] temp = u._getInfo().Split(',');
                username.Text = temp[0];
                email.Text = temp[2];
                phonenumber.Text = temp[1];
                if (temp[3].Equals("ali"))
                    inputPaymentMethod.SelectedIndex = 1;
                if (temp[3].Equals("ten"))
                    inputPaymentMethod.SelectedIndex = 2;
                if (temp[3].Equals("un"))
                    inputPaymentMethod.SelectedIndex = 0;
                Confirm.Text = temp[4];
                QQ.Text = temp[5];
            }
            catch (Exception)
            {
                Response.Redirect("../HomePage.aspx");
                throw;
            }
            
        }

        protected void confirm_Click(object sender, EventArgs e)
        {
            nit.User u = new nit.User(Session["usercode"].ToString());
            String[] temp = new String[3];
            temp[1] = Session["usercode"] + "," + username.Text +","+ phonenumber.Text + "," + email.Text + "," + "ali" + "," + Confirm.Text + "," + QQ.Text;
            temp[2] = Session["usercode"] + "," + username.Text + "," + phonenumber.Text + "," + email.Text + "," + "ten" + "," + Confirm.Text + "," + QQ.Text;
            temp[0] = Session["usercode"] + "," + username.Text + "," + phonenumber.Text + "," + email.Text + "," + "un" + "," + Confirm.Text + "," + QQ.Text;
            if (u.userInfoChange(temp[inputPaymentMethod.SelectedIndex]))
            {
                Response.Write("<script>alert('修改成功！');</script>");
                Response.Redirect("../Users/User.aspx");
            }
        }
    }
}