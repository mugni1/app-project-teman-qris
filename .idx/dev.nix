{ pkgs }: {
  channel = "unstable";

  packages = [
    pkgs.nodejs_22
    pkgs.nodePackages.pnpm
  ];

  idx.extensions = [
    "vue.volar"
    "esbenp.prettier-vscode"
    "Prisma.prisma"
  ];

  idx.previews = {
    previews = {
      web = {
        command = [
          "pnpm"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
