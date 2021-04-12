import { AlbumController } from './controller/albumController'
import { RecordCompanyController } from './controller/recordCompanyController'
import { MusicalPeriodController } from './controller/musicalPeriodController'
import { ComposerController } from './controller/composerController'


export const Routes = [
    // Album
    {
        method: 'get',
        route: '/album',
        controller: AlbumController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/album',
        controller: AlbumController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/album',
        controller: AlbumController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/album',
        controller: AlbumController,
        action: 'remove'
    },
    // Record Company
    {
        method: 'get',
        route: '/recordCompany',
        controller: RecordCompanyController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/recordCompany/:id',
        controller: RecordCompanyController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/recordCompany',
        controller: RecordCompanyController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/recordCompany',
        controller: RecordCompanyController,
        action: 'remove'
    },
    // Musical period
    {
        method: 'get',
        route: '/musicalPeriod',
        controller: MusicalPeriodController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/musicalPeriod',
        controller: MusicalPeriodController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/musicalPeriod',
        controller: MusicalPeriodController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/musicalPeriod',
        controller: MusicalPeriodController,
        action: 'remove'
    },
    // Composer
    {
        method: 'get',
        route: '/composer',
        controller: ComposerController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/composer',
        controller: ComposerController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/composer',
        controller: ComposerController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/composer',
        controller: ComposerController,
        action: 'remove'
    }
]
