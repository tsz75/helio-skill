
# Components
Components are helpers write as React components to simplify the creation
of interactive and engaging documentation. You can import them from any
location using the `@components` alias:
```
import { Image } from "@components/markdown";
```

## Layout

### Columns
```
<Columns>
  <div className="bg-teal-300 rounded-sm">One</div>
  <div className="bg-cyan-300 rounded-sm">Two</div>
</Columns>

<Columns gap={{ phone: '2', tablet: '4' }}>
  <div className="bg-teal-300 rounded-sm">One</div>
  <div className="bg-cyan-300 rounded-sm">Two</div>
</Columns>
```
←
→
One
Two
One
Two

## Linking

### PageLink
```
<PageLink id='reference/actions/data/write-data-variable' />
```
←
→
Write Data Variable Action

## Properties

### Property
```
  <Property name='Property A'>
    This is the description of the property…
  </Property>
  <Property name='Property B' type="dynamic-property">
    This is the description of the property…
  </Property>
  <Property name='Action A' type="action">
    This is the description of the action…
  </Property>
```
←
→

### Property A
This is the description of the property…

### Property B
This is the description of the property…

### Action A
This is the description of the action…

### PropertyGroup
```
  <PropertyGroup name='Property Group Title'>
    <PropertyGroup.Property name='PropertyGroup.Property A'>
      This is the description of the property…
    </PropertyGroup.Property>
  </PropertyGroup>
```
←
→

### Property Group Title

#### Property A
This is the description of the property…

## Helpers

### CopyButton
```
<div className="flex gap-2 items-center">
  <span>eve</span>
  <CopyButton>eve</CopyButton>
</div>
```
←
→
eve
