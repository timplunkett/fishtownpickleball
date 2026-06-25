---
layout: default
permalink: cpl
title: CPL Dashboard
---

<script>
  // Jekyll will convert your JSON file into a raw JS object/array here
  window.matchupData = {{ site.data.matchups | jsonify }};
  window.playerList = {{ site.data.players | jsonify }};
  window.matchupDetails = {{ site.data.matchupDetails | jsonify }};
</script>

 <script src="{{ "/assets/bundle.js" | relative_url }}" />
