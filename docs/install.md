# Installation

Validate supports multiple environments, including **Node.js**, **Deno**, and the **browser** (via CDN).  
Choose the setup that best fits your project.


## Node.js

You can install the library using npm:

```bash
npm install @manoelfernandes/validate
```

Usage:

**Default instance**
```js
import Validate from '@manoelfernandes/validate';

Validate.check("hello", "string");
```

**Class constructor**

```js
import { Validate } from '@manoelfernandes/validate';

const validate = new Validate();
validate.check("hello", "string");
```


## Deno

Import the library directly from GitHub:

**Default instance**

```js
// default instance
import Validate from "https://raw.githubusercontent.com/Manoel-Fernandes/Validate/main/build/validate.min.js";

Validate.check(true, "boolean");
```

**Class constructor**

```js
import { Validate } from "https://raw.githubusercontent.com/Manoel-Fernandes/Validate/main/build/validate.min.js";

const validate = new Validate();
validate.check(true, "boolean");
```


## Browser (via CDN)

You can use Validate directly in the browser:

**Default instance**

```html
<script type="module">
  import Validate from "https://unpkg.com/@manoelfernandes/validate@1.4.1/build/validate.min.js";

  console.log(Validate.check(42, "number")); // true
</script>
```

**Class constructor**

```html
<script type="module">
  import { Validate } from "https://unpkg.com/@manoelfernandes/validate@1.4.1/build/validate.min.js";

  const validate = new Validate();
  console.log(validate.check(42, "number")); // true
</script>
```


