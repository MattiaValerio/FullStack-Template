# @repo/shared

Package condiviso per DTO, Types e Interfaces utilizzati tra i vari progetti del monorepo.

## Struttura

```
src/
  ├── dto/          # Data Transfer Objects
  ├── types/        # Type definitions
  └── interfaces/   # Interface definitions
```

## Utilizzo

### Installazione nei progetti

Aggiungi il package al `package.json` del tuo progetto:

```json
{
  "dependencies": {
    "@repo/shared": "workspace:*"
  }
}
```

### Import

```typescript
// Import tutto
import { ... } from '@repo/shared';

// Import specifici
import { ... } from '@repo/shared/dto';
import { ... } from '@repo/shared/types';
import { ... } from '@repo/shared/interfaces';
```

## Sviluppo

```bash
# Build
pnpm build

# Watch mode
pnpm dev

# Type checking
pnpm typecheck
```

## Struttura file esempio

### DTO (Data Transfer Objects)

I DTO vengono utilizzati per trasferire dati tra client e server.

```typescript
// src/dto/user.dto.ts
export class CreateUserDto {
  email: string;
  password: string;
  name: string;
}

export class UpdateUserDto {
  email?: string;
  name?: string;
}
```

### Types

I types definiscono strutture dati riutilizzabili.

```typescript
// src/types/user.types.ts
export type UserRole = 'admin' | 'user' | 'guest';

export type UserStatus = 'active' | 'inactive' | 'pending';
```

### Interfaces

Le interfaces definiscono contratti per oggetti complessi.

```typescript
// src/interfaces/user.interface.ts
export interface IUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
}
```
