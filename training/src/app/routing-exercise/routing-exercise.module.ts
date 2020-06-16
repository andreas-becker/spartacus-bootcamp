import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactExerciseModule } from '../contact-exercise/contact-exercise.module';
import { RouterModule } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { ContactExerciseComponent } from '../contact-exercise/contact-exercise.component';
import { RoutingConfig, ConfigModule, PRODUCT_NORMALIZER,OccConfig } from '@spartacus/core';
import { ProductPrettyNameNormalizer } from './product-name-normalizer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactExerciseModule,
    RouterModule.forChild([
      { path: 'contact', canActivate: [CmsPageGuard], component: ContactExerciseComponent, },
      //alias example
      { path: 'demo', canActivate: [CmsPageGuard], component: PageLayoutComponent, data: { pageLabel: '/faq'}},
    ]),
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:productCode/:prettyName',
              'product/:manufacturer/:productCode/:name',
              'oldschool/cameras/:productCode/:prettyName',
              'product/:productCode/:prettyName',
              'product/:productCode/:name'
            ]},
          },
        },
      } as RoutingConfig),
      ConfigModule.withConfig({
        backend: {
          occ: {
            endpoints: {
        productSearch:
        'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
            }
          }
        }
      } as OccConfig),
  ],
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductPrettyNameNormalizer,
      multi: true,
    },
  ],
})
export class RoutingExerciseModule { }
