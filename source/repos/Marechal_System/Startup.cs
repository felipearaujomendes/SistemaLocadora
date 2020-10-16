using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Marechal_System.Startup))]
namespace Marechal_System
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
