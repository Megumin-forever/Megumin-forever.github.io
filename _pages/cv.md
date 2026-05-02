---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}
{% assign home = site.data.home.en %}

Education
======

<div class="education-entry">
  <div>
    <strong>{{ home.education.school }}</strong><br>
    {{ home.education.college }}<br>
    {{ home.education.period }}
  </div>
  <img src="{{ home.education.badge | prepend: base_path }}" alt="{{ home.education.badge_alt }}" width="90" style="width: 90px; max-width: 26%; height: auto;">
</div>
