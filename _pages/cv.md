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

<div class="education-entry"
     style="display: grid; grid-template-columns: minmax(0, 1fr) 180px; gap: 24px; align-items: center; margin-bottom: 32px;">
  <div>
    <strong>Tsinghua University</strong><br>
    Incoming Master's Student<br>
    Starting in 2027
  </div>
  <img src="{{ '/images/tsinghua-logo.png' | relative_url }}"
       alt="Tsinghua University"
       style="width: 180px; height: auto; display: block;">
</div>

<div class="education-entry"
     style="display: grid; grid-template-columns: minmax(0, 1fr) 180px; gap: 24px; align-items: center; margin-bottom: 32px;">
  <div>
    <strong>{{ home.education.school }}</strong><br>
    {{ home.education.college }}<br>
    {{ home.education.period }}
  </div>
  <img src="{{ home.education.badge | prepend: base_path }}"
       alt="{{ home.education.badge_alt }}"
       style="width: 180px; height: auto; display: block;">
</div>


## Research Experience

<div class="education-entry">
  <div>
    <strong>Tsinghua University</strong><br>
    Research Intern<br>
    2026 – Present
  </div>
</div>
