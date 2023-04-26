const discordWidget = (($) => {
  const _params = {};
  const version = "1.0";

  return {
    init(Params) {
      _params.serverId = Params.serverId || false;
      _params.title = Params.title || false;
      _params.join = Params.join || true;
      _params.alphabetical = Params.alphabetical || false;
      _params.theme = Params.theme || "light";
      _params.hideChannels = Params.hideChannels || false;
      _params.showAllUsers = Params.showAllUsers || false;
      _params.allUsersDefaultState = Params.allUsersDefaultState || true;
      _params.showNick = Params.showNick || true;
    },
    render() {
      let themeFile;
      switch (_params.theme) {
        case "dark":
          themeFile = "dark.min.css";
          break;
        case "light":
          themeFile = "light.min.css";
          break;
        case "none":
          themeFile = "none.min.css";
          break;
        default:
          themeFile = "light.min.css";
      }
      $("head").append(
        `<link rel="stylesheet" href="//cdn.jsdelivr.net/discord-widget/latest/${themeFile}" type="text/css" />`
      );

      function renderWidget(d, p) {
        const widgetElement = $(".discord-widget")[0];
        $(widgetElement).attr("version", version);
        const defaultInnerHtml =
          '<ul class="discord-tree"></ul><p class="discord-join"></p><div class="discord-fade"></div>';
        let treeElement;

        if (p.title !== false) {
          widgetElement.innerHTML = `<div class="discord-title"><h3>${p.title}</h3></div>${defaultInnerHtml}`;
          treeElement = $(".discord-tree")[0];
        } else {
          widgetElement.innerHTML = defaultInnerHtml;
          treeElement = $(".discord-tree")[0];
          treeElement.style.marginTop = "0";
        }

        switch (d) {
          case "404":
            treeElement.innerHTML =
              '<span class="discord-error">Invalid Server ID</span>';
            break;
          case "522":
            treeElement.innerHTML =
              '<span class="discord-error">Discord is having issues.</span>';
            break;
          default:
            // No error.
            break;
        }

        if (!d) {
          treeElement.innerHTML = d;
          return;
        }

        const joinElement = $(".discord-join")[0];

        let discordJoin = "";
        if (d.instant_invite !== "null") {
          discordJoin = `<a href="${d.instant_invite}" target="_blank">Join Discord</a>`;
        }

        if (p.join) {
          joinElement.innerHTML = discordJoin;
        } else {
          joinElement.style.display = "none";
        }
      }

      const url = `https://discordapp.com/api/servers/${_params.serverId}/embed.json`;

      const xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          const data = JSON.parse(xmlhttp.responseText);
          renderWidget(data, _params);
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
          renderWidget("404", _params);
        } else if (xmlhttp.readyState === 4) {
          renderWidget(xmlhttp.status, _params);
        }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    },
  };
})(jQuery);
