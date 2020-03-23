import {
    Index, LoginBuilder, RegisterBuilder,
    ResetPasswordBuilder, ResetPasswordSendBuilder,
    Error404, Activate, CreateProductBuilder, UpdateProductBuilder
} from './Pages';

export const Routes = [
    {
        path: "/",
        exact: true,
        component: Index,
    },
    {
        path: "/login",
        exact: true,
        component: LoginBuilder,
    },
    {
        path: "/register",
        exact: true,
        component: RegisterBuilder,
    },
    {
        path: "/reset-password",
        exact: true,
        component: ResetPasswordSendBuilder,
    },
    {
        path: "/reset-password/:token",
        exact: true,
        component: ResetPasswordBuilder,
    },
    {
        path: "/activate/:token",
        exact: true,
        component: Activate,
    },
    {
        path: '/product/create',
        exact: true,
        component: CreateProductBuilder
    },
    {
        path: '/product/update/:pk',
        exact: true,
        component: UpdateProductBuilder
    },
    {
        component: Error404,
    }
]