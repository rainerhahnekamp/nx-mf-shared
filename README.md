This Angular project uses nx with module federation.

It uses gridstack which requires two separate imports to the same library.

Angular shows

```
NG0912: Component ID generation collision 
detected. Components 'NxWelcomeComponent' and
'NxWelcomeComponent' with selector
'test-nx-mf-nx-welcome' generated the same
component ID. To fix this, you can change the
selector of one of those components or add an
extra host attribute to force a different
ID. Find more at https://angular.io/errors/NG0912
```
