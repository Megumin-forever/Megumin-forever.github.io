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

## Education

<div class="education-entry">
  <div>
    <strong>Tsinghua University</strong><br>
    Incoming Master's Student<br>
    Starting in 2027
  </div>
  <img src="{{ '/images/tsinghua-logo.png' | relative_url }}"
       alt="Tsinghua University"
       width="180"
       style="width: 180px; max-width: 38%; height: auto;">
</div>

<div class="education-entry">
  <div>
    <strong>{{ home.education.school }}</strong><br>
    {{ home.education.college }}<br>
    {{ home.education.period }}
  </div>
  <img src="{{ home.education.badge | prepend: base_path }}"
       alt="{{ home.education.badge_alt }}"
       width="180"
       style="width: 180px; max-width: 38%; height: auto;">
</div>

## Research Experience

<div class="education-entry">
  <div>
    <strong>Tsinghua University</strong><br>
    Research Intern<br>
    2026 – Present
  </div>
</div>
