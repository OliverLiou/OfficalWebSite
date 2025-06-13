export const systemStore = defineStore("systemStore", {
  state: () => ({
    sidebarOpen: false,
    navMenus: [] as Array<any>
  }),
  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
    setNavMenus() {
      const routers = useRouter();
      const allRoutes = routers.getRoutes() as Array<any>;
      const keys = allRoutes.filter((s) => s.name.split("-").length == 1)
                            .map((s) => { return { path: s.path, name: s.name, meta: s.meta };})
                            .sort((a, b) => a.meta.order - b.meta.order);
      this.navMenus = keys.map((k) => {
        const matchPaths = allRoutes.filter((a) => a.name.includes(k.name) &&
                                                   a.path.includes(k.path) &&
                                                   a.path != k.path);
        // console.log(matchPaths)
        return {
          title: k.meta && k.meta.title ? k.meta.title : k.name,
          path: k.path,
          meta: k.meta,
          matchMenus: matchPaths,
        };
      });
    }
  },
});
