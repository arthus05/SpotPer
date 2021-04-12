import { AlbumController } from './controller/albumController'
import { RecordCompanyController } from './controller/recordCompanyController'
import { MusicalPeriodController } from './controller/musicalPeriodController'
import { ComposerController } from './controller/composerController'
import { TrackController } from './controller/trackController'
import { PlaylistController } from './controller/playlistController'
import { InterpreterController } from './controller/interpreterController'
import { TypeCompositionController } from './controller/typeCompositionController'


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
    },
    // Track
    {
        method: 'get',
        route: '/track',
        controller: TrackController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/track',
        controller: TrackController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/track',
        controller: TrackController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/track',
        controller: TrackController,
        action: 'remove'
    },
    // PLaylist
    {
        method: 'get',
        route: '/playlist',
        controller: PlaylistController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/playlist',
        controller: PlaylistController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/playlist',
        controller: PlaylistController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/playlist',
        controller: PlaylistController,
        action: 'remove'
    },
    // Interpreter
    {
        method: 'get',
        route: '/interpreter',
        controller: InterpreterController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/interpreter',
        controller: InterpreterController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/interpreter',
        controller: InterpreterController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/interpreter',
        controller: InterpreterController,
        action: 'remove'
    },
    // Type Composition
    {
        method: 'get',
        route: '/typeComposition',
        controller: TypeCompositionController,
        action: 'all'
    },
    {
        method: 'get',
        route: '/typeComposition',
        controller: TypeCompositionController,
        action: 'one'
    },
    {
        method: 'post',
        route: '/typeComposition',
        controller: TypeCompositionController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/typeComposition',
        controller: TypeCompositionController,
        action: 'remove'
    }
    
]
