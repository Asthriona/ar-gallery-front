<template>
            <v-footer v-bind="localAttrs" :padless="padless" dark>
              <v-card
                flat
                tile
                width="100%"
                class="lighten-1 text-center"
                color="#232323"
              >
                <v-card-text class="white--text">
                  &copy; 2019 - {{ new Date().getFullYear() }} —
                  <strong>© Asthriona レーシング</strong>.<br />
                  Code Hosted on
                  <a
                    href="https://github.com/asthriona/asthriona.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GitHub</a
                  >
                  DNS Powered by
                  <a
                    href="https://Asthriona.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Asthriona ltd.</a
                  ><br />
                  <span class="muted">Datacenter: {{ location }}</span> <br />
                  <v-divider></v-divider>
                  <div class="company text-left">
                      <v-img src="https://cdn.nishikino.xyz/asthriona/icons/footLogo.png" height="50" contain alt="Asthriona Logo"></v-img>
                      <v-img src="https://cdn.yukiko.app/web/stellar-logo.png" height="50" contain></v-img>
                      
                  </div>
                </v-card-text>
              </v-card>
            </v-footer>
    </template>
    
    <script>
    export default {
      name: "The-Footer",
      data() {
        return {
          icons: [
            {
              name: "mdi-home",
              url: "/"
            },
            {
              name: "mdi-account",
              url: "/dashboard"
            },
            // {
            //   name: "mdi-email",
            //   url: "/contact"
            // },
            {
              name: "mdi-github",
              url: "/"
            },
            {
              name: "mdi-twitter",
              url: "/"
            }
          ],
          longTime: 0,
          padless: true,
          variant: "absolute",
          location: "",
        };
      },
      mounted() {

          this.location = "Tokyo, Japan";
      },
      created() {
         console.log("Asthriona Racing by Asthriona ltd.\nWebsite by Stellar Corporation, commissioned by Asthriona ltd.")
      },
      computed: {
        localAttrs() {
          const attrs = {};
          if (this.variant === "default") {
            (attrs.absolute = false), (attrs.fixed = false);
          } else {
            attrs[this.variant] = true;
          }
          return attrs;
        }
      }
    };
    </script>
    
    <style scoped>
    .Footer {
      margin-bottom: 400px;
    }
    .company {
      display: flex;
      align-content: flex-start;
    }
    .muted {
      color: rgb(124, 124, 124) !important;
    }
    </style>